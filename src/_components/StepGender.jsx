import { Controller, useFormContext, useWatch } from "react-hook-form";
import Select from "react-select";
import FormError from "./FormError";

const genderOptions = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
];

export default function StepGender() {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const selectedGender = useWatch({
    control,
    name: "gender",
  });

  return (
    <div>
      <label>성별</label>
      <Controller
        name="gender"
        control={control}
        rules={{ required: "성별을 선택해주세요. " }}
        render={({ field }) => (
          <Select
            {...field}
            options={genderOptions}
            placeholder={"성별을 선택하세요."}
          />
        )}
      />

      <FormError message={errors.gender?.message} />

      {selectedGender?.value === "famele" && (
        <div>
          <br />
          <label>
            <input type="checkbox" {...register("pregnant")} />
            임신 중입니다.
          </label>
        </div>
      )}
      <br />
    </div>
  );
}
