"use client"
import { PiSunHorizonLight } from "react-icons/pi";
import { BsAirplane } from "react-icons/bs";
import { useEffect } from "react";
import { useGetUserTours } from "@/services/queries";
import Loader from "@/elements/Loader";
import { e2p, sp } from "@/utils/numbers";

function MyToursPage() {
const {data , isPending} = useGetUserTours()
 console.log(data)
if (isPending) return <Loader />;
   
  return (
    <div className="h-auto  border border-[#00000033] rounded-[10px] py-3 px-4">
      {data.data.map(tour=> (
        <div className="h-auto lg:h-[168px] w-full mb-5 border border-[#00000033] rounded-[10px] text-sm">
        <div className="grid grid-cols-2 lg:grid-cols-3 p-4 gap-y-7  pb-5">
          <p className="flex gap-3 items-center text-sm font-normal">
            <PiSunHorizonLight className="text-[22px] " />
            {tour.title}
          </p>

          <p className="flex gap-3 items-center text-sm font-normal">
            <BsAirplane className="text-[22px] " />
            سفر با {tour.fleetVehicle}
          </p>
         
        </div>
        <div className="px-4 grid grid-cols-1 lg:grid-cols-6  gap-y-7 border-b border-[#00000033] pb-4">
          
        <div className="flex gap-2 col-span-2 justify-between lg:justify-start">
          <h5 className="font-medium">{tour.origin.name} به {tour.destination.name} </h5>
          <p className="text-[#00000099] font-normal"> {new Date(tour?.startDate).toLocaleDateString("fa-IR")}</p>
          </div>
          <div className="flex gap-2 col-span-2 justify-between lg:justify-start">
          <h5 className="font-medium">تاریخ برگشت</h5>
          <p className="text-[#12060699] font-normal">. {new Date(tour?.endDate).toLocaleDateString("fa-IR")}</p>
          </div>
        </div>

        <div className="flex py-2  px-4 gap-7 ">
          <div className="flex gap-3 border-e-2 py-3 pe-7">
            <p className="text-[#12060699] font-normal">شماره تور</p>
            <p className="font-medium">{e2p("102095404")}</p>
          </div>
          
          <div className="flex gap-3 py-3 ">
            <p className="text-[#12060699] font-normal ">مبلغ پرداخت شده</p>
            <p className="font-medium">{sp(tour.price)}</p>
            <span className="text-[#12060699] text-[12px]">تومان</span>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default MyToursPage;
