import { TbUserFilled } from "react-icons/tb";
import { PiSunHorizonFill } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
import Link from "next/link";
function DashboardSidebar({children}) {
  return (
    <div className="   h-auto p z-10 py-16">
    <div className="md:flex gap-7 m-auto w-auto xl:w-[1200px] mx-5 xl:mx-0">
        <div className=" flex md:block justify-center md:justify-start md:w-[284px] md:h-[170px] border-b  md:border border-[#00000033]  md:rounded-[10px]">
          <Link href="/profile" className="flex  gap-2 items-center border-b p-4  text-[#28A745]">
            <TbUserFilled />
            پروفایل
          </Link>
          <Link href="/profile/tours" className="flex  gap-2 items-center border-b p-4">
            <PiSunHorizonFill />
            تور های من
          </Link>
          <Link href="/profile/transactions" className="flex  gap-2 items-center  p-4">
            <AiOutlineTransaction />
            تراکنش ها
          </Link>
        </div>
        <div className="w-full">{children}</div>
    </div>
    
    </div>
  )
}

export default DashboardSidebar