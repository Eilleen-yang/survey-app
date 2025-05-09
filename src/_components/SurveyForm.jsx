import { FormProvider, useForm } from "react-hook-form";
import StepName from "./StepName";
import StepAge from "./StepAge";
import StepGender from "./StepGender";

export default function SuveyForm() {
  const methods = useForm();

  const onSubmit = (data) => {
    const submittedData = {
      ...data,
      gender: data.gender?.value || "",
    };
    console.log("폼 제출 데이터", submittedData);
    alert("설문조사 제출 완료!");

    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <StepName />
        <StepAge />
        <StepGender />
        <button type="submit">제출</button>
      </form>
    </FormProvider>
  );
}
