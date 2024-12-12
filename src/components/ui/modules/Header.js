"use client";

import { useEffect, useState } from "react";
import api from "src/core/configs/api";
import { getCookie } from "src/core/utils/cookie";
import CheckOtpForm from "@/widgets/CheckOtpForm";
import Modal from "src/components/partials/container/Modal";
import SendOtpForm from "@/widgets/SendOtpForm";
import Image from "next/image";
import Link from "next/link";

import { TbUserFilled } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxExit } from "react-icons/rx";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const token = getCookie("accessToken");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  useEffect(() => {
    const userInfo = async () => {
      try {
        const res = await api.get("/user/profile");
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    userInfo();
  }, [user]);

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

  return (
    <div className=" py-5 shadow-md z-20  ">
      <header className="flex  items-center justify-between w-[1200px] mx-auto ">
        <div className="flex items-center gap-20">
          <Image width="146" height="44" src="/images/Torino.svg" />

          <ul className="flex gap-16 font-normal">
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
            <button className="flex  gap-2 text-[#28A745] "></button>
            <div className="relative inline-block ">
              <div className="mx-16">
                <button
                  onClick={toggleDropdown}
                  className="flex  gap-2 text-[#28A745]"
                >
                  <TbUserFilled />
                  {user.mobile}
                  <IoIosArrowDown />
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
                      {user.mobile}
                    </p>
                    <Link
                      href="/profile"
                      className="flex gap-2 px-4 py-3  text-sm hover:bg-gray-100 font-light "
                    >
                      <FaRegUser />
                      اطلاعات حساب کاربری
                    </Link>
                    <div className="border border-gray-100 block h-[1px] mx-4"></div>
                    <a
                      href="#"
                      className="flex gap-2 px-4 py-3 text-sm font-light text-[#D40000] hover:bg-gray-100"
                    >
                      <RxExit />
                      خروج از حساب کاربری
                    </a>
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
