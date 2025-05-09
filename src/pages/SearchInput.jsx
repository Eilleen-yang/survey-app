import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function SearchInput() {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 2000);

  useEffect(() => {
    if (debouncedInput) {
      console.log("API 호출 (최종 값) : ", debouncedInput);
    }
  }, [debouncedInput]);

  return (
    <input
      type="text"
      value={input}
      placeholder="검색어를 입력하세요."
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
