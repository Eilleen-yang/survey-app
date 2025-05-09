import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function SurveyResultSwiper({ data, onResetClick }) {
  return (
    <div
      style={{ maxWidth: "400px", margin: "0 auto", border: "1px solide #000" }}
    >
      <h2>설문 결과 요약</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true, type: "progressbar" }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>이름 : {data.name}</SwiperSlide>
        <SwiperSlide>나이 : {data.age}</SwiperSlide>
        <SwiperSlide>성별 : {data.gender.label || data.gender}</SwiperSlide>
      </Swiper>

      <button onClick={onResetClick}>폼으로 돌아가기</button>
    </div>
  );
}
