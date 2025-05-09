import { useEffect, useState } from "react";
import useThrottle from "../hooks/useThrottle";

export default function ScrollHeader() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 2000);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHidden = throttledScrollY > 100;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "1rem",
        backgroundColor: "lightblue",
        transition: "transform 0.3s",
        transform: isHidden ? "translateY(-100%)" : "translateY(0)",
      }}
    >
      헤더 영역
    </div>
  );
}
