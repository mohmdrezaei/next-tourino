import Link from "next/link";
import React from "react";

function Card({ tour }) {
  return (
    <Link href={`/tour/${tour.id}`}>
      <div
        key={tour.id}
        class="w-[278px] bg-white border border-[#0000001F] drop-shadow-sm rounded-[10px] "
        >
        <img
          class="rounded-t-lg"
          src={tour.image}
          alt={tour.title}
          width="278"
          height="159"
        />
        <div class="px-5 pt-3 border border-b-[#D9D9D9]">
          <a href="#">
            <h5 class="mb-2 text-[27px] font-normal tracking-tight text-gray-900 dark:text-white">
              {tour.title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-[#282828B2] dark:text-gray-400">
            {tour.options}.
          </p>
        </div>
        <div className="flex justify-between px-3 py-2 text-base ">
          <button className="bg-[#28A745] text-white rounded px-5">رزرو</button>
          <p className="text-[16px] px-1">
            <span className="text-[#009eca] px-1">{tour.price}</span> تومان
          </p>
        </div>
    
      </div>
          </Link>
  );
}

export default Card;
