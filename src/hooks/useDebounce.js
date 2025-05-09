import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler); // 값이 바뀌면 타이머 초기화
  }, [value, delay]);

  return debouncedValue;
}
