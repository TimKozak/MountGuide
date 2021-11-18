import React from "react";
import { useForm, FormProvider } from "react-hook-form";

// Input types
import TextInput from "./formtypes/TextInput";
import ScaleInput from "./formtypes/ScaleInput";

const GuideForm = ({ lang }) => {
  const {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
  } = lang;
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TextInput
          lang={question1}
          name={question1.googlesheet}
          is_required={true}
        />
        <TextInput
          lang={question2}
          name={question2.googlesheet}
          is_required={true}
        />
        <TextInput
          lang={question4}
          name={question4.googlesheet}
          is_required={true}
        />
        <TextInput
          lang={question7}
          name={question7.googlesheet}
          is_required={false}
        />
        <input type="submit" />
      </form>
    </FormProvider>
  );
};

export default GuideForm;
