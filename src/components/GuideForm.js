import React from "react";
import { useForm, FormProvider } from "react-hook-form";

// Input types
import TextInput from "./formtypes/TextInput";
import ChoiceInput from "./formtypes/ChoiceInput";

const GuideForm = ({ lang }) => {
  const { question1, question2, question3, question4 } = lang;
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form className="container" onSubmit={methods.handleSubmit(onSubmit)}>
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
        {/* <ChoiceInput
          lang={question3}
          name={question3.googlesheet}
          is_required={true}
        /> */}
        <TextInput
          lang={question4}
          name={question4.googlesheet}
          is_required={false}
        />
        <input
          className="btn btn-primary btn-submit"
          type="submit"
          value="Завершити"
        />
      </form>
    </FormProvider>
  );
};

export default GuideForm;
