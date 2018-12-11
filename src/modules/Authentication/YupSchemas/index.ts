import * as yup from 'yup';

export const registerSchema = yup.object().shape({
	username: yup.string().required().trim(),
	password: yup.string().required().trim(),
	email: yup.string().email().required().trim()
});

export const forgotPasswordSchema = yup.object().shape({
	password: yup.string().required().trim()
});
