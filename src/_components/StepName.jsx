import { useFormContext } from "react-hook-form";
import FormError from "./FormError";

export default function StepName() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const name = watch("name");
  return (
    <div>
      {name && <p>{name}님, 안녕하세요!</p>}
      <label>이름</label>
      <input
        type="text"
        style={{
          border: errors.name ? "2px solid crimson" : "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
        }}
        {...register("name", { required: "이름은 필수 입니다." })}
      />
      <FormError message={errors.name?.message} />
      <br />
      <br />
    </div>
  );
}
