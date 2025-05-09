import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import StepName from "../_components/StepName";
import StepAge from "../_components/StepAge";
import StepGender from "../_components/StepGender";
import SurveyResultSwiper from "../_components/SurveyResultSwiper";

export default function Home() {
  const methods = useForm({ mode: "onBlur" });
  const [step, setStep] = useState(0);
  const [submittedData, setSubmittedData] = useState(null);

  const onSubmit = (data) => {
    console.log("form submit data: ", data);
    setSubmittedData(data);
    alert("설문조사 제출 완료!!");
  };

  const handleNext = async () => {
    const valie = await methods.trigger();

    if (valie) setStep((prev) => prev + 1);
  };
  const handleBack = () => {
    if (valie) setStep((prev) => prev - 1);
  };

  const steps = [
    <StepName key={"name"} />,
    <StepAge key={"age"} />,
    <StepGender key={"gender"} />,
  ];

  if (submittedData)
    return (
      <SurveyResultSwiper
        data={submittedData}
        onResetClick={() => {
          setSubmittedData(null);
          setStep(0);
        }}
      />
    );
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h2>
          설문조사 ({step + 1} / {steps.length})
        </h2>
        {steps[step]}

        <div>
          {step > 0 && (
            <button type="button" onClick={handleBack}>
              이전
            </button>
          )}
          {step < steps.length - 1 && (
            <button type="button" onClick={handleNext}>
              다음
            </button>
          )}
          {step === steps.length - 1 && <button type="submit">제출</button>}
        </div>
      </form>
    </FormProvider>
  );
}
