import { Form, Formik } from "formik";
import React, { useContext } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { registerSchema } from "../schema/Index";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const { registerFormSubmit, handleOpenregister } = useContext(UserContext);
  const onclick = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      registerFormSubmit(values);
    }, 1000);
  };
  return (
    <>
      <Formik
        initialValues={{
          Email: "",
          Password: "",
          ConfirmPassword: "",
          FullName: "",
        }}
        onSubmit={onclick}
        validationSchema={registerSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Email"
              placeholder="Email"
              type="text"
              name="Email"
            />
            <CustomInput
              label="Full Name"
              placeholder="Full Name"
              type="text"
              name="FullName"
            />
            <CustomInput
              label="Password"
              placeholder="Password"
              type="password"
              name="Password"
            />
            <CustomInput
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              name="ConfirmPassword"
            />
            <CustomButton
              text="Sign up"
              type="submit"
              disabled={isSubmitting}
            />
            <Link onClick={handleOpenregister}>
              Already have an account? <span>Sign in</span>
            </Link>
            <p>
              Click “Sign Up” to agree to Medium’s <Link>Terms of Service</Link>
              and acknowledge that Medium’s <Link>Privacy Policy</Link> applies
              to you.
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
}
