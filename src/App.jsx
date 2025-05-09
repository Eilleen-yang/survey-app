import "./App.css";
import SearchBar from "./_components/SearchBar";
import DebounceThrottleDemo from "./pages/DebounceThrottleDemo";
import Home from "./pages/Home";
import ScrollPosition from "./pages/ScrollPosition";
import SearchInput from "./pages/SearchInput";

function App() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      {/* react-hook-form, react-select : 설문조사 폼 */}
      {/* <Home /> */}

      {/* 디바운싱, 쓰로틀링 차이*/}
      <DebounceThrottleDemo />
      {/* 디바운싱을 이용해 검색 기능 최적화 */}
      <SearchBar />
      {/* 디바운싱 */}
      <SearchInput />
      {/* 쓰트롤링 */}
      <ScrollPosition />
    </div>
  );
}

export default App;
