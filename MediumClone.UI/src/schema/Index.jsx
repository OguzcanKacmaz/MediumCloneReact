import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const loginSchema = yup.object().shape({
  Email: yup
    .string()
    .email("Email format is wrong")
    .required("Username is required"),
  Password: yup.string().required("Password is required"),
});
export const registerSchema = yup.object().shape({
  Email: yup
    .string()
    .email("Email format is wrong")
    .required("Username is required"),
  Password: yup
    .string()
    .min(5, "Password must be a minimum of 5 characters")
    .matches(passwordRules, {
      message:
        "Password must contain at least 1 uppercase letter, 1 lowercase letter and 1 number",
    })
    .required("Password is required"),
  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password")], "Passwords do not match")
    .required("Confirm Password is required"),
});
