const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User, validateLoginUser } = require("../models/User");

async function registerUser(req, res) {
    const { error } = validateCreateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user)
        return res
          .status(400)
          .json({ message: "L'utilisateur est déjà enregistré." });
  
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      user = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: hashedPassword,
        is_admin: req.body.is_admin || false,
        image: req.body.image || null,
        phone_number: req.body.phone_number,
      });
  
      await user.save();
  
      res.status(201).json({
        message: "Utilisateur créé avec succès",
      });
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
      res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
    }
  }
async function loginUser(req, res) {
  const { error } = validateLoginUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "Email invalide." });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ message: "mot de passe invalide." });

    const token = jwt.sign(
      { id: user._id, is_admin: user.is_admin, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({
      token,
      user: {
        id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        is_admin: user.is_admin,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la connexion de l'utilisateur :", error);
    res.status(500).json({ message: "Erreur lors de la connexion de l'utilisateur" });
  }
}
async function updateUser(req, res) {
    const userId = req.params.id;
  
    try {
      const updatedFields = {};
      if (req.body.first_name) updatedFields.first_name = req.body.first_name;
      if (req.body.last_name) updatedFields.last_name = req.body.last_name;
      if (req.body.email) updatedFields.email = req.body.email;
      if (req.body.image) updatedFields.image = req.body.image;
      if (req.body.phone_number) updatedFields.phone_number = req.body.phone_number;
  
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: updatedFields },
        { new: true }
      );
  
      if (!user)
        return res.status(404).json({ message: "Utilisateur non trouvé." });
  
      res.status(200).json({
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        image: user.image,
        phone_number: user.phone_number,
      });
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
      res.status(500).json({ message: "Erreur lors de la mise à jour de l'utilisateur :" });
    }
  }
  async function changePassword(req, res) {
    try {
      const userEmail = req.email;
  
      const user = await User.findOne({ email: userEmail });
  
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé." });
      }
  
      if (!req.body.new_password) {
        return res
          .status(400)
          .json({ message: "Le nouveau mot de passe est requis." });
      }
  
      const validPassword = await bcrypt.compare(
        req.body.old_password,
        user.password
      );
      if (!validPassword) {
        return res
          .status(400)
          .json({ message: "L'ancien mot de passe est incorrect." });
      }
  
      const hashedNewPassword = await bcrypt.hash(
        req.body.new_password,
        10 // You may replace 10 with your desired bcrypt salt round
      );
  
      user.password = hashedNewPassword;
      await user.save();
  
      res.status(200).json({ message: "Mot de passe mis à jour avec succès." });
    } catch (error) {
      console.error("Error changing password:", error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  }
  async function deleteUser(req, res) {
    try {
      const userId = req.params.id;
  
      const user = await User.findOneAndDelete({ _id: userId });
      if (!user) {
        return res.status(404).send("Utilisateur non trouvé.");
      }
  
      res.status(200).json({ message: "Utilisateur supprimé avec succès." });
    } catch (error) {
      console.error("Erreur interne du serveur", error);
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  }
module.exports = {
  loginUser,
  registerUser,
  changePassword,
  deleteUser,
  updateUser
};
