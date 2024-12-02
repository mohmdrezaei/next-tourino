import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="mt-96">
      <div className="flex items-center mt-96 border-b-[1px] border-gray-300 pb-5">
        <div className="flex items-center ">
          <Image src="/images/Group16.svg" width="121" height="109" />
          <div>
            <h3 className="font-medium text-[26px]">بصرفه ترین قیمت</h3>
            <p className="text-base font-light">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Image src="/images/Group17.svg" width="121" height="109" />
          <div>
            <h3 className="font-medium text-[26px]">پشتیبانی </h3>
            <p className="text-base font-light">
              پشتیبانی وهمراهی 24 ساعته در تمامب مراحل سفر شما
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Image src="/images/Group 18.svg" width="121" height="109" />
          <div>
            <h3 className="font-medium text-[26px]"> رضایت کاربران</h3>
            <p className="text-base font-light">
              رضایت بیش از 10 هزار کاربر از تور های ما.
            </p>
          </div>
        </div>
      </div>

      <div className="flex mb-10  justify-between items-start my-7">
        <div className="flex gap-28">
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
        <div className="justify-items-end">
        <Image  src="/images/Torino.svg" width="146" height="44"/>
        <p className="mt-6 text-[15px] font-normal">تلفن پشتیبانی : 8574-021</p>
        <div className="flex mt-12 gap-9">
        <Image  src="/images/state-airline-f45c55b2 1.svg" width="70" height="74"/>
        <Image  src="/images/passenger-rights-48368f81 1.svg" width="70" height="74"/>
        <Image  src="/images/ecunion-35c3c933.svg" width="70" height="74"/>
        <Image  src="/images/samandehi-6e2b448a.svg" width="70" height="74"/>
        <Image  src="/images/aira-682b7c43.svg" width="70" height="74"/>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
