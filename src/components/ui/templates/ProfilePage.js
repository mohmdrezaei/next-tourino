import { TbUserFilled } from "react-icons/tb";
import { PiSunHorizonFill } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
import { PiPencilSimpleLine } from "react-icons/pi";
function ProfilePage() {
  return (
    <div className="   h-[650px] z-10 pt-16">
      <div className="flex gap-7 m-auto w-[1200px]">
        <div className=" w-[284px] h-[170px] border border-[#00000033]  rounded-[10px]">
          <p className="flex  gap-2 items-center border-b p-4 bg-[#28A74540] text-[#28A745]">
            <TbUserFilled />
            پروفایل
          </p>
          <p className="flex  gap-2 items-center border-b p-4">
            <PiSunHorizonFill />
            تور های من
          </p>
          <p className="flex  gap-2 items-center  p-4">
            <AiOutlineTransaction />
            تراکنش ها
          </p>
        </div>
        <div className="w-full">
          <div className=" border border-[#00000033] h-[115px] rounded-[10px] p-3 ">
            <h4 className="font-normal text-base">اطلاعات حساب کاربری</h4>
            <div className="flex justify-between mt-7">
              <p className="mx-4 text-sm">
                شماره موبایل
                <span className="font-normal mx-5">09224522125</span>
              </p>
              <p >
                ایمیل
                <span className="mx-10">--</span>
              </p>
              <button className="flex gap-3 mx-8 text-[#009ECA]">
                <PiPencilSimpleLine />
                افزودن
              </button>
            </div>
          </div>

          <div className=" border border-[#00000033] h-[171px] rounded-[10px] p-3 mt-8 ">
           <div className="flex justify-between">
           <h4 className="font-normal text-base">اطلاعات شخصی</h4>
           <button className="flex gap-3 mx-8 text-[#009ECA]">
                <PiPencilSimpleLine />
                ویرایش اطلاعات
              </button>
           </div>
            
             <div className="grid grid-cols-2 gap-y-9 mt-5 text-sm">
             <div className="flex gap-5">
                <p>نام و نام خانوادگی</p>
                <span className=" font-medium ">مانیا رحیمی </span>
              </div>
              <div className="flex gap-5">
                <p> کدملی  </p>
                <span className="font-normal">مانیا رحیمی </span>
              </div>
           
           
              <div className="flex gap-5">
                <p>جنسیت</p>
                <span className="font-medium">مانیا رحیمی </span>
              </div>
              <div className="flex gap-5">
                <p>تاریخ تولد</p>
                <span className="font-normal">مانیا رحیمی </span>
              </div>
          
             </div>
          </div>

          <div className=" border border-[#00000033] h-[171px] rounded-[10px] p-3 mt-8 ">
           <div className="flex justify-between">
           <h4 className="font-normal text-base">اطلاعات حساب بانکی</h4>
           <button className="flex gap-3 mx-8 text-[#009ECA]">
                <PiPencilSimpleLine />
                ویرایش اطلاعات
              </button>
           </div>
            
             <div className="grid grid-cols-2 gap-y-9 mt-5 text-sm">
             <div className="flex gap-5">
                <p>شماره شبا</p>
                <span className=" font-medium ">--</span>
              </div>
              <div className="flex gap-5">
                <p> شماره کارت  </p>
                <span className="font-normal"> 6037991752468520 </span>
              </div>
           
           
              <div className="flex gap-5">
                <p>شماره حساب</p>
                <span className="font-medium">--</span>
              </div>
              
          
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
