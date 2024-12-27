
import Image from "next/image";

import { TbRoute } from "react-icons/tb";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { PiBusFill } from "react-icons/pi";
import { HiMiniUsers } from "react-icons/hi2";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { e2p, sp } from "@/utils/numbers";

import ReserveButton from "@/widgets/ReserveButton";

function TourDetailsPage({tour}) {
  return (
    <div className="lg:bg-[#F3F3F3] h-auto lg:h-[650px] z-10 py-16 ">
      <div className="w-auto xl:w-[1200px] lg:h-[427px] bg-white rounded-[10px] lg:border p-7  border-[#00000033]  mx-auto">
        <div className="lg:flex gap-7 ">
          <img
            src={tour.image}
            alt={tour.title}
            className="rounded-xl  h-[265px]"
          />
          <div className=" w-full mt-5 lg:mt-0">
            <div className="flex lg:block justify-between">
            <h1 className="font-semibold text-[32px]">{tour?.title}</h1>
            <p className="text-xl font-normal mt-5">5 روز و 4 شب</p>
             </div>
            <div className="flex gap-16 mt-10 text-lg lg:text-xl text-[#7D7D7D]">
             {tour?.options?.map((option,index) => (
              <p key={index}>{option}</p>
             ))}
            </div>
            <div className="hidden lg:flex items-center justify-between mt-10">
              <p className="text-[16px] px-1">
                <span className="text-[#009eca] text-[28px] font-normal px-1">{sp(tour?.price)}</span> تومان
              </p>
              <ReserveButton id ={tour.id} />
            </div>
          </div>
        </div>

        <div className="flex gap-10 mt-10 justify-between  ">
            <div className=" hidden lg:flex flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <TbRoute/>
                  <p className="">مبدا</p>
                </div>
                <p className="text-base font-normal mt-3">{tour?.origin?.name}</p>
            </div>
            <div className="hidden lg:flex flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <BsFillCalendarDateFill/>
                  <p className="">تاریخ رفت</p>
                </div>
                <p className="text-base font-normal mt-3">{new Date(tour?.startDate).toLocaleDateString("fa-IR")}</p>
            </div>
            <div className="hidden lg:flex flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <BsFillCalendarDateFill/>
                  <p className="">تاریخ برگشت</p>
                </div>
                <p className="text-base font-normal mt-3">{new Date(tour?.endDate).toLocaleDateString("fa-IR")}</p>
            </div>
            <div className="flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <PiBusFill/>
                  <p className="">حمل ونقل</p>
                </div>
                <p className="text-base font-normal mt-3">{tour?.fleetVehicle}</p>
            </div>
            <div className="flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <HiMiniUsers/>
                  <p className="">ظرفیت </p>
                </div>
                <p className="text-base font-normal mt-3">حداکثر {e2p(tour?.availableSeats)} نفر</p>
            </div>
            <div className="flex-col">
                <div className="flex gap-2  text-lg text-[#444444]">
                  <AiFillSafetyCertificate/>
                  <p className="">بیمه</p>
                </div>
                <p className="text-base font-normal mt-3">بیمه {e2p(tour?.insurance)} هزار دیناری</p>
            </div>
            
        </div>

        <div className="flex lg:hidden flex-row-reverse items-center justify-between mt-10">
              <p className="text-[16px] px-1">
                <span className="text-[#009eca] text-[28px] font-normal px-1">{sp(tour.price)}</span> تومان
              </p>
              <ReserveButton id ={tour.id} />
            </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;
