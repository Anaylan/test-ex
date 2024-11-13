import * as yup from "yup"

export const contactSchema = yup.object().shape({
    name: yup.string().trim().required('Type your name'),
    email: yup.string().email("Email must be a valid email").required('Type your email'),
    message: yup.string().trim().min(2, "Message length must be at least 2 characters").required()
});