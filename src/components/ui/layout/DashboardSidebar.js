import { TbUserFilled } from "react-icons/tb";
import { PiSunHorizonFill } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
function DashboardSidebar({children}) {
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
        <div className="w-full">{children}</div>
    </div>
    
    </div>
  )
}

export default DashboardSidebar