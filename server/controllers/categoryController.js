const { Category, validateCreateCategory, validateUpdateCategory } = require("../models/Category");

const create = async (req, res) => {
   
  try {
    const { error, value } = validateCreateCategory(req.body);
    if (error) return res.status(400).json({ message: "Validation error: " + error.details[0].message });

    const newCategory = new Category(value);
    await newCategory.save();
    
    res.status(201).json({ message: `Category '${newCategory.name}' created successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

const getById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found." });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

const update = async (req, res) => {
    // if (!req.is_admin) {
    //     return res
    //       .status(403)
    //       .json({ message: "Vous n'avez pas le droit de modifier un Categorie" });
    //   }
  try {
    const { error, value } = validateUpdateCategory(req.body);
    if (error) return res.status(400).json({ message: "Validation error: " + error.details[0].message });

    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, value, { new: true });
    if (!updatedCategory) return res.status(404).json({ message: "Category not found." });

    res.status(200).json({ message: `Category '${updatedCategory.name}' updated successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

const remove = async (req, res) => {
    // if (!req.is_admin) {
    //     return res
    //       .status(403)
    //       .json({ message: "Vous n'avez pas le droit de supprimer un Categorie" });
    //   }
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deletedCategory) return res.status(404).json({ message: "Category not found." });

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

module.exports = { create, getAll, getById, update, remove };