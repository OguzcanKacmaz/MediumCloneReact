import { useField } from "formik";
import React from "react";

export default function CustomButton({ text, ...props }) {
  return <button {...props}>{text}</button>;
}
