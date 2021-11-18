import React from "react";
import { useFormContext } from "react-hook-form";

const ScaleInput = ({ lang, name, is_required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  return (
    <div>
      <p>{lang.text}</p>
      <input {...register(name)} />
    </div>
  );
};

export default ScaleInput;
