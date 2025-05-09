import { useFormContext } from "react-hook-form";
import FormError from "./FormError";

export default function StepAge() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label>나이</label>
      <input
        type="number"
        style={{
          border: errors.age ? "2px solid crimson" : "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
        }}
        {...register("age", {
          required: "나이는 필수입니다.",
          min: { value: 10, message: "10세 이상만 참여 가능합니다." },
        })}
      />
      <FormError message={errors.age?.message} />
      <br />
      <br />
    </div>
  );
}
