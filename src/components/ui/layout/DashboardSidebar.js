"use client";
import { TbUserFilled } from "react-icons/tb";
import { PiSunHorizonFill } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthProvider from "@/provider/AuthProvider";


function DashboardSidebar({ children }) {
  const currentPath = usePathname();
  return (
    <AuthProvider>
      <div className="   lg:h-[650px] p z-10 py-16">
        <div className="md:flex gap-7 m-auto w-auto lg:w-[1200px]  ">
          <div className=" flex md:block justify-center md:justify-start md:w-[284px] md:h-[170px] border-b  md:border border-[#00000033]  md:rounded-[10px]">
            <Link
              href="/profile"
              className={`flex  gap-2 items-center border-b p-4 ${
                currentPath === "/profile" ? "text-[#28A745]" : ""
              }`}
            >
              <TbUserFilled />
              پروفایل
            </Link>
            <Link
              href="/profile/tours"
              className={`flex  gap-2 items-center border-b p-4 ${
                currentPath === "/profile/tours" ? "text-[#28A745]" : ""
              }`}
            >
              <PiSunHorizonFill />
              تور های من
            </Link>
            <Link
              href="/profile/transactions"
              className={`flex  gap-2 items-center  p-4 ${
                currentPath === "/profile/transactions" ? "text-[#28A745]" : ""
              }`}
            >
              <AiOutlineTransaction />
              تراکنش ها
            </Link>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default DashboardSidebar;
