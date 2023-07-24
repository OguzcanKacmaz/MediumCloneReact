import { Form, Formik } from "formik";
import React, { useContext } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { loginSchema } from "../schema/Index";
import { UserContext } from "../context/UserContext";

export default function LoginForm() {
  const { handleOpenregister } = useContext(UserContext);
  const { userGetToken } = useContext(UserContext);
  const onclick = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      setSubmitting(false);
      var response = userGetToken(values);
      response ? resetForm() : "";
    }, 1000);
  };
  return (
    <>
      <Formik
        initialValues={{
          Email: "",
          Password: "",
        }}
        onSubmit={onclick}
        validationSchema={loginSchema}
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
              label="Password"
              placeholder="Password"
              type="password"
              name="Password"
            />
            <CustomButton
              text="Sign In"
              type="submit"
              disabled={isSubmitting}
            />

            <Link onClick={handleOpenregister}>
              No account? <span>Create one</span>
            </Link>
            <p>
              Forgot email or trouble signing in? <Link>Get help.</Link>
            </p>
            <p>
              Click “Sign In” to agree to Medium’s <Link>Terms of Service</Link>
              and acknowledge that Medium’s <Link>Privacy Policy</Link> applies
              to you.
            </p>
          </Form>
        )}
      </Formik>
    </>
  );
}
