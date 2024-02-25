const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  price: {
    type: Number,
    default: 0.0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
    minlength: 8,
  },
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

const validateCreateProduct = (obj) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(3).required().messages({
      'any.required': `Le nom du produit est requis.`,
      'string.empty': `Le nom du produit ne doit pas être vide.`,
      'string.min': `Le nom du produit doit contenir au moins 3 caractères.`,
    }),
    price: Joi.number().default(0.0).messages({
      'number.base': `Le prix doit être un nombre.`,
    }),
    stock: Joi.number().default(0).messages({
      'number.base': `Le stock doit être un nombre.`,
    }),
    image: Joi.string().allow(null).messages({
      'string.base': `L'image doit être une chaîne de caractères.`,
    }),
    description: Joi.string().allow(null).min(8).messages({
      'string.base': `La description doit être une chaîne de caractères.`,
      'string.min': `La description doit contenir au moins 8 caractères.`,
    }),
  });
  return schema.validate(obj);
};

const validateUpdateProduct = (obj) => {
  const schema = Joi.object({
    name: Joi.string().trim().min(3).messages({
      'string.base': `Le nom du produit doit être une chaîne de caractères.`,
      'string.min': `Le nom du produit doit contenir au moins 3 caractères.`,
    }),
    price: Joi.number().messages({
      'number.base': `Le prix doit être un nombre.`,
    }),
    stock: Joi.number().messages({
      'number.base': `Le stock doit être un nombre.`,
    }),
    image: Joi.string().allow(null).messages({
      'string.base': `L'image doit être une chaîne de caractères.`,
    }),
    description: Joi.string().allow(null).min(8).messages({
      'string.base': `La description doit être une chaîne de caractères.`,
      'string.min': `La description doit contenir au moins 8 caractères.`,
    }),
  }).or("name", "price", "stock", "image");

  return schema.validate(obj);
};

module.exports = { Product, validateCreateProduct, validateUpdateProduct };
