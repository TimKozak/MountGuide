import React from "react";
import { useFormContext } from "react-hook-form";

const ChoiceInput = ({ lang, register_type }) => {
  const { register } = useFormContext();
  return (
    <div className="form">
      <p>{lang.text}</p>
      {lang.options.map((option_text) => (
        <div>
          <input
            type="checkbox"
            id="scales2"
            name={option_text}
            value={option_text}
          />
          <label for={option_text}>{option_text}</label>
        </div>
      ))}
    </div>
  );
};

export default ChoiceInput;
