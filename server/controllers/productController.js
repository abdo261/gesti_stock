const { Product, validateCreateProduct, validateUpdateProduct } = require("../models/Product");

const create = async (req, res) => {
  try {
    const { error, value } = validateCreateProduct(req.body);
    if (error) return res.status(400).json({ message: "Validation error: " + error.details[0].message });

    const newProduct = new Product(value);
    await newProduct.save();
    
    res.status(201).json({ message: `Product '${newProduct.name}' created successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

const getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found." });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

const update = async (req, res) => {
   
  try {
    const { error, value } = validateUpdateProduct(req.body);
    if (error) return res.status(400).json({ message: "Validation error: " + error.details[0].message });

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, value, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: "Product not found." });

    res.status(200).json({ message: `Product '${updatedProduct.name}' updated successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

const remove = async (req, res) => {
     // if (!req.is_admin) {
    //     return res
    //       .status(403)
    //       .json({ message: "Vous n'avez pas le droit de modifier un Categorie" });
    //   }
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found." });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error: " + error.message });
  }
};

module.exports = { create, getAll, getById, update, remove };
