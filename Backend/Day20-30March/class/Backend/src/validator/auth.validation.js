import Joi from "joi"


export const registerValidation = Joi.object({
    username: Joi.string()
    .min(3)
    .max(15)
    .required(),
    email: Joi.string()
    .email()
    .required(),
    fullname: Joi.string()
    .min(3)
    .max(50)
    .required(),
    password:Joi.string()
    .min(4)
    .pattern(/\d/)
    .pattern(/[A-Z]/)
    .pattern(/[a-z]/)
    .pattern(/[@#$!%*?&]/)
    .required()
    
})