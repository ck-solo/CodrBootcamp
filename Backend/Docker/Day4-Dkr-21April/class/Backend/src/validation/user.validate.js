import Joi from "joi";
import { body, validationResult } from "express-validator";

 
export function validate(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            success: false,
        })
    }

    next()
}

export const registerValidation = Joi.object({
  username: Joi.string().trim().min(3).max(15).required(),

  email: Joi.string().email().lowercase().required(),

  fullname: Joi.string().trim().min(3).max(50).required(),

  password: Joi.string()
    .min(6)
    .pattern(/\d/, "number")
    .pattern(/[A-Z]/, "uppercase")
    .pattern(/[a-z]/, "lowercase")
    .pattern(/[@#$!%*?&]/, "special")
    .required(),
});

export const loginValidation = Joi.object({
  username: Joi.string().trim().min(3).max(15),

  email: Joi.string().email().lowercase(),

  password: Joi.string().min(6).required(),
}).xor("username", "email"); // stricter