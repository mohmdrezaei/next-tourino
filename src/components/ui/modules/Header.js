"use client";
import { useState } from "react";
import CheckOtpForm from "@/widgets/CheckOtpForm";
import Modal from "src/components/partials/container/Modal";
import SendOtpForm from "@/widgets/SendOtpForm";
import Image from "next/image";
import Link from "next/link";
import { e2p } from "@/utils/numbers";
import { useGetUser } from "@/services/queries";
import { deleteCookie } from "@/utils/cookie";
import { usePathname, useRouter } from "next/navigation";
import { Box, Drawer } from "@mui/material";

import { TbUserFilled } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { AiOutlineLogin } from "react-icons/ai";
import { RiHome6Fill } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import { PiAirplane  } from "react-icons/pi";
import { CiVolumeHigh } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi2";
import { QueryClient } from "@tanstack/react-query";


function Header() {
  
  const currentPath = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { data, isPending } = useGetUser();
const closeHandler = ()=>{
  setIsOpen("")
}
  const toggleDrawer = (newOpen) => () => {
    setDrawer(newOpen);
  };
  

  const openModal = () => {
    setIsModalOpen(true);
    setMobile("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    router.replace("/");
    setIsOpen(false)
    setIsLoggedIn(false)
     
  };

  

  return (
    <div className=" h-[70px]">
    <div className=" pt-5 md:py-5 shadow-sm z-20  bg-white fixed  w-full xl:w-[1440px] ">
      <header className="flex  items-center justify-between px-5 md:w-auto m-auto pb-2 md:pb-0  xl:w-[1200px] ">
        <div className="flex items-center gap-20 ">
          <Image
            width="146"
            height="44"
            src="/images/Torino.svg"
            className="hidden md:block"
            alt="logo"
          />
          <button
            onClick={toggleDrawer(true)}
            className=" md:hidden text-[30px] "
          >
            <LuMenu />
          </button>
          <Drawer open={drawer} onClose={toggleDrawer(false)}>
            <Box
              sx={{ width: 209 }}
              role="presentation"
              onClick={toggleDrawer(false)}
            >
              <div className="pt-7 px-3">
                <div className={`flex gap-2 mb-7  text-base ${currentPath === "/" ? "text-[#28A745]" : ""}`}>
                 <RiHome6Fill />
                  <Link className="font-normal  " href="/">صفحه اصلی</Link>
                </div>
                <div className="flex gap-2 mb-7  text-base">
                 <PiAirplane  />
                  <Link className="font-normal " href="#">خدمات گردشگری</Link>
                </div>
                <div className="flex gap-2 mb-7  text-base">
                 <CiVolumeHigh />
                  <Link className="font-normal " href="#">درباره ما</Link>
                </div>
                <div className="flex gap-2 mb-7  text-base">
                 <HiOutlinePhone />
                  <Link className="font-normal " href="#">تماس با ما</Link>
                </div>
              </div>
            </Box>
          </Drawer>

          <ul className=" gap-16 font-normal hidden md:flex">
            <li>
              <Link className={`font-normal ${currentPath === "/" ? "text-[#28A745]" : ""}`}  href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link className="font-normal" href="/">خدمات گردشگری</Link>
            </li>
            <li>
              <Link className="font-normal" href="/"> درباره ما</Link>
            </li>
            <li>
              <Link className="font-normal" href="/"> تماس با ما</Link>
            </li>
          </ul>
        </div>

        {isLoggedIn ? (
          <>
            <button className="  gap-2 text-[#28A745] "></button>
            <div className="relative inline-block ">
              <div className=" md:mx-16">
                <button
                  onClick={toggleDropdown}
                  className="gap-2 text-[#28A745] flex"
                >
                  <TbUserFilled />
                  {e2p(data?.data?.mobile)}
                  <IoIosArrowDown />
                </button>
              </div>

              {isOpen && (
                <div className="origin-top-right absolute left-0 mt-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div>
                    <p
                      className="flex items-center gap-2 px-3 mt-0 py-2 text-base bg-[#F4F4F4] font-medium"
                    >
                      <span className="bg-[#D9D9D9] rounded-full w-7 h-7 flex justify-center items-center ">
                        <TbUserFilled color="#696969" />
                      </span>
                      {e2p(data?.data?.mobile)}
                    </p>
                    <Link
                      href="/profile"
                      className="flex gap-2 px-4 py-3  text-sm hover:bg-gray-100 font-light "
                      onClick={closeHandler}
                    >
                      <FaRegUser />
                      اطلاعات حساب کاربری
                    </Link>
                    <div className="border border-gray-100 block h-[1px] mx-4"></div>
                    <button
                      onClick={logout}
                      className="flex gap-2 px-4 py-3 w-full text-sm font-light text-[#D40000] hover:bg-gray-100"
                    >
                      <RxExit />
                      خروج از حساب کاربری
                    </button>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={openModal}
              className=" border-2 border-[#28A745] text-[#28A745] py-1 px-4  rounded-lg text-center hidden md:flex items-center gap-2"
            >
              <TbUserFilled />
              ورود | ثبت نام
            </button>
            <button
              onClick={openModal}
              className="text-[#28A745] p-2 rounded-lg text-[25px] block md:hidden border border-[#28A745]"
            >
              <AiOutlineLogin />
            </button>
          </>
        )}
        <Modal isOpen={isModalOpen}>
          {step === 1 && (
            <SendOtpForm
              setStep={setStep}
              mobile={mobile}
              setMobile={setMobile}
              onClose={closeModal}
            />
          )}
          {step === 2 && (
            <CheckOtpForm
              mobile={mobile}
              setStep={setStep}
              closeModal={closeModal}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}
        </Modal>
      </header>
    </div>
    </div>
  );
}

export default Header;
