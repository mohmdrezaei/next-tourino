import Image from "next/image";


import { TbRoute } from "react-icons/tb";
import { BsFillCalendarDateFill, BsUbuntu } from "react-icons/bs";
import { PiBusFill } from "react-icons/pi";
import { HiMiniUsers } from "react-icons/hi2";
import { AiFillSafetyCertificate } from "react-icons/ai";

function TourDetailsPage() {
  return (
    <div className="bg-[#F3F3F3] h-[650px] z-10 pt-16 ">
      <div className="w-[1200px] h-[427px] bg-white rounded-[10px] border p-7  border-[#00000033]  mx-auto">
        <div className="flex gap-7 ">
          <img
            src="/images/arbil.svg"
            className="rounded-xl    h-[265px]"
          />
          <div className=" w-full">
            <h1 className="font-semibold text-[32px]">تور هولیر</h1>
            <p className="text-xl font-normal mt-5">5 روز و 4 شب</p>
            <div className="flex gap-16 mt-10 text-xl text-[#7D7D7Dلف]">
              <p>تورلیدر از مبدا</p>
              <p>برنامه سقر</p>
              <p>تضمین کیفیت</p>
            </div>
            <div className="flex items-center justify-between mt-10">
              <p className="text-[16px] px-1">
                <span className="text-[#009eca] text-[28px] font-normal px-1">17500000</span> تومان
              </p>
              <button className="bg-[#28A745] text-white text-2xl rounded-[10px] py-3 px-12">رزرو و خرید</button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 mt-10 justify-between  ">
            <div className="flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <TbRoute/>
                  <p className="">مبدا</p>
                </div>
                <p className="text-base font-normal mt-3">سنندج</p>
            </div>
            <div className="flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <BsFillCalendarDateFill/>
                  <p className="">تاریخ رفت</p>
                </div>
                <p className="text-base font-normal mt-3">23 مهر 1403</p>
            </div>
            <div className="flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <BsFillCalendarDateFill/>
                  <p className="">تاریخ برگشت</p>
                </div>
                <p className="text-base font-normal mt-3">28 مهر 1403</p>
            </div>
            <div className="flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <PiBusFill/>
                  <p className="">حمل ونقل</p>
                </div>
                <p className="text-base font-normal mt-3">اتوبوس</p>
            </div>
            <div className="flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <HiMiniUsers/>
                  <p className="">ظرفیت </p>
                </div>
                <p className="text-base font-normal mt-3">حداکثر 30 نفر</p>
            </div>
            <div className="flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <AiFillSafetyCertificate/>
                  <p className="">بیمه</p>
                </div>
                <p className="text-base font-normal mt-3">بیمه 50 هزار دیناری</p>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;
