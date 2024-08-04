// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ImageSlide = () => {
  return (
      <div className="
    ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-screen"
      >
        <SwiperSlide className="flex text-center items-center justify-center">Slide 1</SwiperSlide>
        <SwiperSlide className="flex text-center items-center justify-center">Slide 2</SwiperSlide>
        <SwiperSlide className="flex text-center items-center justify-center">Slide 3</SwiperSlide>
        <SwiperSlide className="flex text-center items-center justify-center">Slide 4</SwiperSlide>
        <SwiperSlide className="flex text-center items-center justify-center">Slide 5</SwiperSlide>
        <SwiperSlide className="flex text-center items-center justify-center">Slide 6</SwiperSlide>
        <SwiperSlide className="flex text-center items-center justify-center">Slide 7</SwiperSlide>
        <SwiperSlide className="flex text-center items-center justify-center">Slide 8</SwiperSlide>
        <SwiperSlide className="flex text-center items-center justify-center">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlide;
