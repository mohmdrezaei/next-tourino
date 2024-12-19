"use client";
import { e2p } from "@/utils/numbers";
import Card from "@/widgets/Card";
import Image from "next/image";
import {  useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DatePicker } from "zaman";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCards, Pagination, Navigation  } from 'swiper/modules';

import { FaPhoneAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

function HomePage({ data }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const originParam = searchParams.get('origin');
    const destinationParam = searchParams.get('destination');
    const dateParam = searchParams.get('date');

    if (originParam) setOrigin(originParam);
    if (destinationParam) setDestination(destinationParam);
    if (dateParam) setDate(dateParam);

    // Filter data based on search parameters
    let filtered = data;
    if (originParam) {
      filtered = filtered.filter(item => item.origin.name.toLowerCase() === originParam.toLowerCase());
    }
    if (destinationParam) {
      filtered = filtered.filter(item => item.destination.name.toLowerCase() === destinationParam.toLowerCase());
    }
    if (dateParam) {
      filtered = filtered.filter(item => item.startDate.slice(0,10)=== dateParam);
    }
   
    setFilteredData(filtered);
  }, [searchParams, data]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10)
  };

  
  

  const submitHandler = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (origin) params.append("origin", origin);
    if (destination) params.append("destination", destination);
    if (date) params.append("date", formatDate(date));

    router.push(`?${params.toString()}`);
  };
 
  return (
    <div className=" ">
      <Image
        className="w-full mt-3"
        src="/images/landing.svg"
        width="1440"
        height="350"
        alt="banner"
      />

      <div className="text-center mt-5">
        <h4 className="text-[16px] md:text-[28px] font-medium text-[#595959]  tracking-wider">
          <sapn className="text-[#35ac50] font-medium tracking-wider">
            تورینو
          </sapn>
          برگزار کننده بهترین تور های داخلی و خارجی
        </h4>

        <form onSubmit={submitHandler} className="w-[874px]  grid grid-cols-4 p-3 gap-5 border h-[71px] mx-auto mt-7 rounded-[20px]">
          <select
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            class="appearance-none  w-full border-0 bg-0 focus:outline-none "
          >
            <option value="">مبدا</option>
            <option value="sanandaj">سنندج </option>
            <option value="tabriz">تبریز</option>
            <option value="isfahan">اصفهان</option>
            <option value="tehran">تهران</option>
            <option value="shiraz">شیراز</option>
          </select>
          <select
            className="appearance-none  w-full border-0 focus:outline-none "
            value={destination}
            onChange={(e) => setDestination(e.target.value)}

          >
            <option value="">مقصد</option>
            <option value="tehran">تهران</option>
            <option value="sananndaj">سنندج </option>
            <option value="tabriz">تبریز</option>
            <option value="shiraz">شیراز</option>
            <option value="mazandaran">مازندران</option>
          </select>
         
           <DatePicker   value={date}
            onChange={(e) => setDate(e.value)} inputClass="focus:outline-none  placeholder-[#2C2C2C]" inputAttributes={{ placeholder: "تاریخ" }}  />
          <button type="submit" className=" bg-[#28A745] font-normal text-2xl rounded-2xl text-white w-[190px]">
            جستجو
          </button>
        </form>
      </div>

      <div className="md:w-[1200px] mx-5 lg:mx-auto mt-10">
        <h3 className="font-normal text-[20px] md:text-[32px] tracking-wide">همه تور ها</h3>
        <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-4 mt-3 gap-8">
          {filteredData.map((tour) => (
            <Card key={tour.id} tour={tour} />
          ))}
        </div>

        <div className="lg:flex  border border-[#00000040] w-auto h-auto lg:h-[251px] mt-20 rounded-[10px] ">
          <div className="bg-[#28A745] rounded-[10px] xl:w-[870px] text-white relative  h-[120px] md:h-auto">
            <div className="lg:m-12  ">
              <h1 className="text-[22px] md:text-5xl font-semibold inline-block p-3 pb-0">
                خرید تلفنی از
                <sapn className="text-[22px] md:text-5xl font-semibold text-[#10411b] ">
                  تورینو
                </sapn>
              </h1>
              <p className="text-sm md:text-[32px] font-light mx-3 ">
                به هر کجا که میخواهید
              </p>
            </div>

            <Image
              className="absolute  left-0 md:left-10 bottom-0 w-[195px] md:w-[308px]"
              src="/images/professional-cartoon-man.svg"
              width="308"
              height="225"
              alt="cartoon-man"
            />
          </div>

          <div className=" m-auto flex lg:flex-col gap-4 justify-center items-center p-3">
            <p className="flex gap-2 font-semibold text-[20px] md:text-[28px] ">
              {e2p("021-1840")}
              <FaPhoneAlt />
            </p>
            <button className="bg-[#10411B] text-white text-sm md:text-base font-normal  px-7 py-2 md:px-12 md:mt-3 rounded-[9px]">
              اطلاعات بیشتر
            </button>
          </div>
        </div>

        <div className="md:flex gap-28 mt-20 md:mt-40">
          <div>
            <div className="flex gap-4 items-center">
              <div className="bg-gradient-to-tr from-[#10411B]  to-[#28A745] w-8 h-9 md:h-[65px] md:w-[65px]  text-white rounded-full text-bse md:text-4xl font-bold flex justify-center items-center">
                <FaQuestion />
              </div>
              <h3 className="text-2xl md:text-[40px] font-normal">
                چرا
                <span className="text-2xl md:text-[40px] mx-2 font-normal text-[#28a745]">
                  تورینو
                </span>
                ؟
              </h3>
            </div>

            <p className="font-normal mt-5 text-2xl hidden md:block">تور طبیعت گردی و تاریخی</p>
            <p className="w-[517px] mt-5 text-xl text-[#282828] leading-10 hidden md:block ">
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
              طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
              تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
              گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
              فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>

          <div className="mt-5">
          <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards , Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
     
        
      >
        <SwiperSlide><Image src="/images/slide1.svg" height="479" width="389" className="w-[479px]" alt="slide1"/></SwiperSlide>
        <SwiperSlide><Image src="/images/slide2.svg" height="479" width="389" className="w-[479px]" alt="slide2" /></SwiperSlide>
        <SwiperSlide><Image src="/images/slide3.svg" height="479" width="389" className="w-[479px]" alt="slide3" /></SwiperSlide>
        <SwiperSlide><Image src="/images/slide4.svg" height="479" width="389" className="w-[479px]" alt="slide4" /></SwiperSlide>
      </Swiper>
          </div>
        </div>
      </div>

      <div className="border border-gray-300 h-[2px]  mt-32  flex justify-center"></div>
      <div className="grid gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center items-center lg:w-[1200px] mx-auto mt-7  pb-5 justify-center content-center">
        <div className="flex items-center ">
          <Image className="h-16 md:h-32" src="/images/Group16.svg" width="121" height="109"  alt="Group16" />
          <div>
            <h3 className="font-medium text-sm  md:text-[26px]">بصرفه ترین قیمت</h3>
            <p className="text-[12px] md:text-base font-light w-[202px]">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>
        <div className="flex  items-center ">
          <Image className="h-16 md:h-32" src="/images/Group17.svg" width="121" height="109"  alt="Group17" />
          <div>
            <h3 className="font-medium text-sm  md:text-[26px]">پشتیبانی </h3>
            <p className="text-[12px] md:text-base font-light w-[202px]">
              پشتیبانی وهمراهی 24 ساعته در تمامب مراحل سفر شما
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Image className="h-16 md:h-32" src="/images/Group 18.svg" width="121" height="109" alt="Group 18" />
          <div>
            <h3 className="font-medium text-sm  md:text-[26px]"> رضایت کاربران</h3>
            <p className="text-[12px] md:text-base font-light w-[202px]">
              رضایت بیش از 10 هزار کاربر از تور های ما.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
