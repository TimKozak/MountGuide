import React from "react";
import { useFormContext } from "react-hook-form";

import Error from "./Error";

const TextInput = ({ lang, name, is_required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="form-container">
      <p className="form-text">{lang.text}</p>
      <input
        className={`form-text-input ${errors[name] && "error-input"}`}
        {...register(name, { required: is_required })}
      />
      {errors[name] && <Error lang={{ alert: "This field is required" }} />}
    </div>
  );
};

export default TextInput;
