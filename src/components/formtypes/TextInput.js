import React from "react";
import { useFormContext } from "react-hook-form";

const TextInput = ({ lang, name, is_required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <p>{lang.text}</p>
      <input {...register(name, { required: is_required })} />
      {errors[name] && <p>This field is required</p>}
    </div>
  );
};

export default TextInput;
