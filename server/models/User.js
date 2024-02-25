const { Schema, model } = require("mongoose");
const joi = require("joi");
const UserSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
      minlength: 3,
    },
    prenom: {
      type: String,
      require: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 8,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: null,
    },
    phone_number:{
      type:String,
      required:true
    }
  },
  { versionKey: false, timestamps: true }
);

UserSchema.virtual("user_name").get(function () {
  return `${this.nom}_${this.prenom}`;
});

const User = model("user", UserSchema);

//validate userCreate Schema
const validateCreateUser = (obj) => {
  const userSchema = joi.object({
    nom: joi.string().trim().min(3).max(50).required(),
    prenom: joi.string().trim().min(3).max(50).required(),
    email: joi.string().trim().email().min(8).required(),
    password: joi.string().trim().min(8).required(),
    is_admin: joi.boolean().default(false),
    image: joi.string().allow(null).optional(),
    phone_number: joi.string().trim().required(),
  });
  return userSchema.validate(obj);
};
//validate userLogin Schema
const validateLoginUser = (obj) => {
  const userSchema = joi.object({
    email: joi.string().trim().email().min(8).required(),
    password: joi.string().trim().min(8).required(),
  });
  return userSchema.validate(obj);
};

const validateUpdateUser = (obj) => {
  const userSchema = joi
    .object({
      nom: joi.string().trim().min(3).max(50).required(),
      prenom: joi.string().trim().min(3).max(50).required(),
      email: joi.string().trim().email().min(8).required(),
      is_admin: joi.boolean().default(false),
      image: joi.string().allow(null).optional(),
      phone_number: joi.string().trim().required(),
    })
    .or("nom", "prenom", "email", "is_admin", "image");
  return userSchema.validate(obj);
};
module.exports = {
  User,
  validateCreateUser,
  validateLoginUser,
  validateUpdateUser,
};
