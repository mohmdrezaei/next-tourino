import { e2p } from "@/utils/numbers";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className=" w-auto xl:w-[1200px] mx-auto border-t-2  border-gray-300">

      <div className="lg:flex mb-10  justify-between items-start sm:mx-5 lg:mx-0 my-7">
        <div className="flex justify-center gap-28">
        <div className="font-normal text-[18px]">
          <h3 className="font-medium text-2xl mb-7">تورینو</h3>
          <p className="mb-2">درباره ما</p>
          <p className="mb-2">تماس با ما</p>
          <p className="mb-2">چرا تورینو</p>
          <p className="mb-2"> بیمه مسافرتی</p>
        </div>
        <div className="font-normal text-[18px]">
          <h3 className="font-medium text-2xl mb-7">خدمات مشتریان</h3>
          <p className="mb-2"> پشتیبانی آنلاین</p>
          <p className="mb-2">راهنمای خرید </p>
          <p className="mb-2"> راهنمای استرداد</p>
          <p className="mb-2"> پرسش و پاسخ</p>
        </div>
        </div>
        <div className="justify-items-end flex flex-row-reverse md:block gap-10">
        <div className="content-end">
        <Image  src="/images/Torino.svg" width="146" height="44" alt="logo"/>
        <p className="mt-6 text-[15px] font-normal">تلفن پشتیبانی :  {e2p("8574-021")} </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 justify-center items-center mt-12 gap-2 md:gap-9 ">
        <Image className="h-9 w-9 md:h-16 md:w-16"  src="/images/state-airline-f45c55b2 1.svg" width="70" height="74"/>
        <Image className="h-9 w-9 md:h-16 md:w-16" src="/images/passenger-rights-48368f81 1.svg" width="70" height="74"/>
        <Image className="h-9 w-9 md:h-16 md:w-16" src="/images/ecunion-35c3c933.svg" width="70" height="74"/>
        <Image className="h-9 w-9 md:h-16 md:w-16" src="/images/samandehi-6e2b448a.svg" width="70" height="74"/>
        <Image className="h-9 w-9 md:h-16 md:w-16" src="/images/aira-682b7c43.svg" width="70" height="74"/>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
