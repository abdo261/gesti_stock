const { Schema, model } = require("mongoose");
const joi = require("joi");
// const i18n = require("i18n");
const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true,versionKey:false }
);
const Category = model("category", CategorySchema);

const validateCreateCategory = (obj) => {
  const schema = joi.object({
    name: joi
      .string()
      .trim()
      .min(2)
      .required()
      .pattern(/^[-a-zA-Z0-9 ]+$/)
      .messages({
        'string.base': `Le nom de la catégorie doit être une chaîne de caractères.`,
        'string.empty': `Le nom de la catégorie ne doit pas être vide.`,
        'string.min': `Le nom de la catégorie doit contenir au moins 2 caractères.`,
        'any.required': `Le nom de la catégorie est requis.`,
        'string.pattern.base': `Le nom de la catégorie ne doit contenir que des lettres, des chiffres, des tirets ou des espaces.`,
      }),
    color: joi
      .string()
      .trim()
      .required()
      .pattern(
        /^(#?)(?:rgb\((?:[0-9]{1,3},){2}[0-9]{1,3}\)|[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?)$/
      )
      .messages({
        'string.base': `La couleur doit être une chaîne de caractères.`,
        'string.empty': `La couleur ne doit pas être vide.`,
        'any.required': `La couleur est requise.`,
        'string.pattern.base': `Le format de couleur n'est pas valide. Il doit être au format hexadécimal ou rgb.`,
      }),
  });

  return schema.validate(obj);
};

const validateUpdateCategory = (obj) => {
  const schema = joi
    .object({
      name: joi
        .string()
        .trim()
        .min(2)
        .pattern(/^[-a-zA-Z0-9 ]+$/)
        .messages({
          'string.base': `Le nom de la catégorie doit être une chaîne de caractères.`,
          'string.empty': `Le nom de la catégorie ne doit pas être vide.`,
          'string.min': `Le nom de la catégorie doit contenir au moins 2 caractères.`,
          'any.required': `Le nom de la catégorie est requis.`,
          'string.pattern.base': `Le nom de la catégorie ne doit contenir que des lettres, des chiffres, des tirets ou des espaces.`,
        }),
      color: joi
        .string()
        .trim()
        .pattern(
          /^(#?)(?:rgb\((?:[0-9]{1,3},){2}[0-9]{1,3}\)|[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?)$/
        )
        .messages({
          'string.base': `La couleur doit être une chaîne de caractères.`,
          'string.empty': `La couleur ne doit pas être vide.`,
          'any.required': `La couleur est requise.`,
          'string.pattern.base': `Le format de couleur n'est pas valide. Il doit être au format hexadécimal ou rgb.`,
        }),
    })
    .or("name", "color");

  return schema.validate(obj);
};

module.exports = { Category, validateCreateCategory,validateUpdateCategory };
