import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const genderOptions = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
];

export default function SuveyForm() {
  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const submittedData = {
      ...data,
      gender: data.gender?.value || "",
    };
    console.log("폼 제출 데이터", submittedData);
    alert("설문조사 제출 완료!");
  };

  const name = watch("name");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {name && <p>{name}님, 환영합니다!</p>}
      <div>
        <label>이름</label>
        <input
          type="text"
          {...register("name", { required: "이름은 필수입니다." })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label>나이</label>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <input
          type="number"
          {...register("age", {
            required: "나이는 필수입니다.",
            min: { value: 10, message: "10대 이상만 참여가능합니다." },
          })}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </div>
      <div>
        <label>성별</label>
        {/* <select {...register("gender", { required: "성별을 선택해주세요." })}>
          <option value="">선택</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
        </select> */}
        <Controller
          name="gender"
          control={control}
          rules={{ required: "성별을 선택해주세요." }}
          render={({ field }) => (
            <Select
              {...field}
              options={genderOptions}
              placeholder="성별을 선택하세요."
            />
          )}
        />
        {errors.gender && (
          <p style={{ color: "red" }}>{errors.gender.message}</p>
        )}
      </div>
      <div>
        <label>관심사</label>
        <div>
          <label>
            <input
              type="checkbox"
              value="frontend"
              {...register("interests")}
            />
            프론트엔드
          </label>
          <label>
            <input type="checkbox" value="backend" {...register("interests")} />
            백엔드
          </label>
          <label>
            <input type="checkbox" value="design" {...register("interests")} />
            디자인
          </label>
        </div>
      </div>
      <button type="submit">제출</button>
    </form>
  );
}
