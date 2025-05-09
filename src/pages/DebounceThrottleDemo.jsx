import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import useThrottle from "../hooks/useThrottle";

export default function DebounceThrottleDemo() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([]);

  const debounced = useDebounce(input, 1000);
  const throttled = useThrottle(input, 1000);

  // 시각적 로그 저장
  const logMesssage = (label, value) => {
    setLogs((prev) => [
      { label, value, time: new Date().toLocaleTimeString() },
      ...prev.slice(0, 10), // 최근 10개만 표시
    ]);
  };

  // input이 바뀔 때마다 바로 로그
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    logMesssage("⌨️ Input", value);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>Debounce vs Throttle 시각화 ( 입력 로그 )</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="빠르게 입력해보세요."
        style={{ padding: ".5rem", width: "100%", fontSize: "16px" }}
      />

      <div style={{ marginTop: "1.5rem" }}>
        <h4>🚨 로그:</h4>
        <ul style={{ lineHeight: "1.6" }}>
          {logs.map((log, index) => (
            <li key={index}>
              <strong>{log.label}</strong> : {log.value} @ {log.time}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <p>
          <strong>실시간 입력값 : </strong> {input}
        </p>
        <p>
          <strong>Debounced 값 : </strong> {debounced}
        </p>
        <p>
          <strong>Throttled 값 : </strong> {throttled}
        </p>
      </div>
    </div>
  );
}
