import { Form, Formik } from "formik";
import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { registerSchema } from "../schema/Index";

export default function RegisterForm() {
  const onclick = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      userGetToken(values);
    }, 1000);
  };
  return (
    <>
      <Formik
        initialValues={{
          Email: "",
          Password: "",
          ConfirmPassword: "",
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
              text="Register"
              type="submit"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
