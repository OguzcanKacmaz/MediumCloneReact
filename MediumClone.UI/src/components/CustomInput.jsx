import { useField } from "formik";
import React from "react";

export default function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="input-group">
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.error && <p className="error">{meta.error}</p>}
    </div>
  );
}
