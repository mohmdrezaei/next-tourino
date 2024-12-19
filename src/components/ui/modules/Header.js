"use client";

import { useEffect, useState } from "react";
import api from "src/core/configs/api";

import CheckOtpForm from "@/widgets/CheckOtpForm";
import Modal from "src/components/partials/container/Modal";
import SendOtpForm from "@/widgets/SendOtpForm";
import Image from "next/image";
import Link from "next/link";
import { e2p } from "@/utils/numbers";

import { TbUserFilled } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { LuMenu } from "react-icons/lu";
import { useGetUser } from "@/services/queries";
import Loader from "@/elements/Loader";
import { deleteCookie, getCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";


function Header() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const token = getCookie("accessToken");
  const{data ,  isPending} = useGetUser()
console.log(data)
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

 

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
  
  const logout =()=>{
    deleteCookie("accessToken")
    deleteCookie("refreshToken")
    router.replace("/")
  }
  

  return (
    <div className=" pt-5 md:py-5 md:shadow-md z-20  ">
      <header className="flex  items-center justify-between px-5 md:w-auto m-auto  xl:w-[1200px] ">
        <div className="flex items-center gap-20 ">
          <Image width="146" height="44" src="/images/Torino.svg" className="hidden md:block" alt="logo" />
       <button className=" md:hidden text-[30px]">
       <LuMenu   />
       </button>

          <ul className=" gap-16 font-normal hidden md:flex">
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/">خدمات گردشگری</Link>
            </li>
            <li>
              <Link href="/"> درباره ما</Link>
            </li>
            <li>
              <Link href="/"> تماس با ما</Link>
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
                  className="gap-2 text-[#28A745] hidden md:flex"
                >
                  <TbUserFilled />
                  {e2p(data?.data?.mobile)}
                  <IoIosArrowDown />
                </button>
                <button className="text-[#28A745] text-[30px] block md:hidden">
                <RxExit />
                </button>
              </div>

              {isOpen && (
                <div className="origin-top-right absolute left-0 mt-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div>
                    <p
                      href="#"
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
                    >
                      <FaRegUser />
                      اطلاعات حساب کاربری
                    </Link>
                    <div className="border border-gray-100 block h-[1px] mx-4"></div>
                    <button
                    onClick={logout}
                      className="flex gap-2 px-4 py-3 text-sm font-light text-[#D40000] hover:bg-gray-100"
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
          <button
            onClick={openModal}
            className=" border-2 border-[#28A745] text-[#28A745] py-1 px-4  rounded-lg text-center flex items-center gap-2"
          >
            <TbUserFilled />
            ورود | ثبت نام
          </button>
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
  );
}

export default Header;
