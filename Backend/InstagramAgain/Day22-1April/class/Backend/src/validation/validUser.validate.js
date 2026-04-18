import { param, validationResult } from "express-validator";
import { validate } from "./user.validate.js";


export const validateFollowUser = [
    param("userId")
        .notEmpty().withMessage("User ID is required")
        .isMongoId().withMessage("Invalid User ID format"),
    validate
]

export const validateFollowRequest = [
    param("requestId")
        .notEmpty().withMessage("Request ID is required")
        .isMongoId().withMessage("Invalid Request ID format"),
    validate
]