
import { useAddToBasket } from "@/services/mutations";
import { sp } from "@/utils/numbers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

function Card({ tour }) {
 
  return (
    <div
      class="w-auto md:w-[278px] bg-white border border-[#0000001F] drop-shadow-sm rounded-[10px] "
    >
      <img
        class="rounded-t-lg w-full h-auto"
        src={tour.image}
        alt={tour.title}
        
        height="159"
      />
      <div class="px-5 pt-3 border border-b-[#D9D9D9]">
          <h5 class="mb-2 text-[27px] font-normal tracking-tight text-gray-900 dark:text-white">
            {tour.title}
          </h5>
        <p class="mb-3  w-63 whitespace-nowrap text-ellipsis overflow-hidden">
         {tour.options.map((option , index) =>(
          <span key={index} className=" text-[#282828B2]">{option}،</span>
         ))}
        </p>
      </div>
      <div className="flex justify-between px-3 py-2 text-base ">
        <Link
        href={`/tour/${tour.id}`}
          className="bg-[#28A745] text-white rounded px-5"
        >
          رزرو
        </Link>
        <p className="text-[16px] px-1">
          <span className="text-[#009eca] px-1">{sp(tour.price)}</span> تومان
        </p>
      </div>
    </div>
  );
}

export default Card;
