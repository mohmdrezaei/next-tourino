
import Card from "@/widgets/Card";
import Image from "next/image";

import { FaPhoneAlt } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

function HomePage({data}) {
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
      <h4 className="text-[28px] font-medium text-[#595959]  tracking-wider">
        <sapn className="text-[#35ac50] font-medium tracking-wider">
          تورینو
        </sapn>
        برگزار کننده بهترین تور های داخلی و خارجی
      </h4>
    </div>

    <div className="w-[1200px] mx-auto">
      <h3 className="font-normal text-[32px] tracking-wide">همه تور ها</h3>
      <div className="grid grid-cols-4 mt-3 gap-8">
       {data.map(tour =>(
        <Card key={tour.id} tour={tour} />
       ))}
      </div>

      <div className="flex  border border-[#00000040] h-[251px] mt-20 rounded-[10px] ">
        <div className="bg-[#28A745] rounded-[10px] w-[870px] text-white relative  ">
          <div className="m-12">
            <h1 className="text-5xl font-semibold ">
              خرید تلفنی از
              <sapn className="text-5xl font-semibold text-[#10411b]">
                تورینو
              </sapn>
            </h1>
            <p className="text-[32px] font-light mx-3 mt-4">
              به هر کجا که میخواهید
            </p>
          </div>

          <Image
            className="absolute  left-10 bottom-0"
            src="/images/professional-cartoon-man.svg"
            width="308"
            height="225"
          />
        </div>

        <div className=" m-auto flex flex-col items-center">
          <p className="flex gap-2 font-semibold text-[28px] ">
            021-1840
            <FaPhoneAlt />
          </p>
          <button className="bg-[#10411B] text-white text-[16px] font-normal py-2 px-12 mt-3 rounded-[9px]">
            اطلاعات بیشتر
          </button>
        </div>
      </div>

      <div className="flex mt-40">
        <div>
          <div className="flex gap-4 items-center">
            <div className="bg-gradient-to-tr from-[#10411B] to-[#28A745] h-[65px] w-[65px]  text-white rounded-full text-4xl font-bold flex justify-center items-center">
              <FaQuestion />
            </div>
            <h3 className="text-[40px] font-normal">
              چرا
              <span className="text-[40px] font-normal text-[#28a745]">
                تورینو
              </span>
              ؟
            </h3>
          </div>

          <p className="font-normal mt-5 text-2xl">تور طبیعت گردی و تاریخی</p>
          <p className="w-[517px] mt-5 text-xl text-[#282828] leading-10 ">
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
            تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
            گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
            فرهنگی و تاریخی را خریداری کنید.
          </p>
        </div>

        <div>
        </div>
      </div>
   

    </div>

    <div className="border border-gray-300 h-[2px]  mt-32 flex justify-center"></div>
      <div className="flex gap-20 items-center w-[1200px] mx-auto mt-7  pb-5 justify-center">
        <div className="flex items-center ">
          <Image src="/images/Group16.svg" width="121" height="109" />
          <div>
            <h3 className="font-medium text-[26px]">بصرفه ترین قیمت</h3>
            <p className="text-base font-light w-[202px]">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>
        <div className="flex items-center ">
          <Image src="/images/Group17.svg" width="121" height="109" />
          <div>
            <h3 className="font-medium text-[26px]">پشتیبانی </h3>
            <p className="text-base font-light w-[202px]">
              پشتیبانی وهمراهی 24 ساعته در تمامب مراحل سفر شما
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <Image src="/images/Group 18.svg" width="121" height="109" />
          <div>
            <h3 className="font-medium text-[26px]"> رضایت کاربران</h3>
            <p className="text-base font-light w-[202px]">
              رضایت بیش از 10 هزار کاربر از تور های ما.
            </p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default HomePage