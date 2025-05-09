import { useEffect, useState } from "react";
import useThrottle from "../hooks/useThrottle";

export default function ScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 2000);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "2000px" }}>
      <p style={{ position: "fixed" }}>Y 위치 : {throttledScrollY}</p>
    </div>
  );
}
