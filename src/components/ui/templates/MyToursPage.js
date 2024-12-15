import { PiSunHorizonLight } from "react-icons/pi";
import { BsAirplane } from "react-icons/bs";

function MyToursPage() {
  return (
    <div className="h-auto  border border-[#00000033] rounded-[10px] py-3 px-4">
      <div className="h-[168px] w-full border border-[#00000033] rounded-[10px]">
        <div className="grid grid-cols-3 p-4 gap-y-7">
          <p className="flex gap-3 items-center text-sm font-normal">
            <PiSunHorizonLight className="text-[22px] " />
            تور اقلیم کردستان
          </p>

          <p className="flex gap-3 items-center text-sm font-normal">
            <BsAirplane className="text-[22px] " />
            سفر با هواپیما
          </p>
          <div className="w-full justify-items-end">
            <p className="bg-[#28A7454D] rounded-lg text-[12px] text-[#28A745] w-[75px] h-5 text-center ">
              به اتمام رسیده
            </p>
          </div>
          <div className="flex gap-2">
          <h5>تهران به سلیمانیه </h5>
          <p>. دوشنبه 15 شهریور 1403</p>
          </div>
          <div className="flex gap-2">
          <h5>تاریخ برگشت</h5>
          <p>. جمعه 19 شهریور 1403</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyToursPage;
