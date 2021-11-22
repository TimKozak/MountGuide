import React from "react";
import { useFormContext } from "react-hook-form";
import Checkbox from "./Checkbox";

const ChoiceInput = ({ lang, name, is_required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="form">
      <p>{lang.text}</p>
      {lang.options.map((option_text) => (
        <div>
          <Checkbox
            ref={register({ required: is_required })}
            name={option_text}
            value={false}
            label="Example placeholder text"
          />
          <label for={option_text}>{option_text}</label>
        </div>
      ))}
      {errors.example_4 && <p class="error">{errors.example_4.message}</p>}
    </div>
  );
};

export default ChoiceInput;
