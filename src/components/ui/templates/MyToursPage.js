import { PiSunHorizonLight } from "react-icons/pi";
import { BsAirplane } from "react-icons/bs";

function MyToursPage() {
  return (
    <div className="h-auto  border border-[#00000033] rounded-[10px] py-3 px-4">
      <div className="h-[168px] w-full border border-[#00000033] rounded-[10px] text-sm">
        <div className="grid grid-cols-3 p-4 gap-y-7 border-b border-[#00000033] pb-5">
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
          <h5 className="font-medium">تهران به سلیمانیه </h5>
          <p className="text-[#00000099] font-normal">. دوشنبه 15 شهریور 1403</p>
          </div>
          <div className="flex gap-2">
          <h5 className="font-medium">تاریخ برگشت</h5>
          <p className="text-[#12060699] font-normal">. جمعه 19 شهریور 1403</p>
          </div>
        </div>

        <div className="flex py-2  px-4 gap-7 ">
          <div className="flex gap-3 border-e-2 py-3 pe-7">
            <p className="text-[#12060699] font-normal">شماره تور</p>
            <p className="font-medium">102095404</p>
          </div>
          
          <div className="flex gap-3 py-3 ">
            <p className="text-[#12060699] font-normal ">مبلغ پرداخت شده</p>
            <p className="font-medium">18000000</p>
            <span className="text-[#12060699] text-[12px]">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyToursPage;
