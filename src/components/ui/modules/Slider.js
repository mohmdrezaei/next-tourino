import { e2p } from '@/utils/numbers';
import Image from 'next/image';
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectCards, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <Swiper
    effect={"cards"}
    grabCursor={true}
    modules={[EffectCards, Pagination, Navigation]}
    className="mySwiper"
    loop={true}
    pagination={{
      type: "fraction",
      el: ".custom-pagination",
      renderFraction: (currentClass, totalClass) => {
        const formatToPersian = (num) => e2p(num.toString());
        return `<span class="${totalClass}">${formatToPersian(
          1
        )}</span> / <span class="${currentClass}">${formatToPersian(
          2
        )}</span>`;
      },
      formatFractionCurrent: (number) => e2p(number),
      formatFractionTotal: (number) => e2p(number),
    }}
    navigation={{
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    }}
  >
    <div className="custom-navigation flex justify-center gap-2 mt-4 w-[120px] m-auto">
      <button className="custom-next text-[#10411B]">
        <FaArrowRight />
      </button>
      <div className="custom-pagination text-center mt-2 w-[120px] m-auto text-blue-600"></div>

      <button className="custom-prev text-[#10411B]">
        <FaArrowLeft />
      </button>
    </div>
    <SwiperSlide>
      <Image
        src="/images/slide1.svg"
        height="479"
        width="389"
        className="w-[479px]"
        alt="slide1"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="/images/slide2.svg"
        height="479"
        width="389"
        className="w-[479px]"
        alt="slide2"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="/images/slide3.svg"
        height="479"
        width="389"
        className="w-[479px]"
        alt="slide3"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="/images/slide4.svg"
        height="479"
        width="389"
        className="w-[479px]"
        alt="slide4"
      />
    </SwiperSlide>
  </Swiper>
  )
}

export default Slider