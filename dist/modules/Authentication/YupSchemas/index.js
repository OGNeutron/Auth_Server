"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup = require("yup");
exports.registerSchema = yup.object().shape({
    username: yup.string().required().trim(),
    password: yup.string().required().trim(),
    email: yup.string().email().required().trim()
});
exports.forgotPasswordSchema = yup.object().shape({
    password: yup.string().required().trim()
});
//# sourceMappingURL=index.js.map