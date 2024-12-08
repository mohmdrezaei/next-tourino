"use client";

import { useEffect, useState } from "react";
import api from "@/configs/api";
import { getCookie } from "@/utils/cookie";
import CheckOtpForm from "@/widgets/CheckOtpForm";
import Modal from "@/widgets/Modal";
import SendOtpForm from "@/widgets/SendOtpForm";
import Image from "next/image";
import Link from "next/link";

import { TbUserFilled } from "react-icons/tb";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user , setUser] =useState({})
  const token = getCookie("accessToken"); 

  useEffect(() => {
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
  }, [token]);

  useEffect(()=> {
    const userInfo = async()=>{
      try {
        const res = await api.get("/user/profile") 
        setUser(res.data)
    } catch (error) {
        console.log(error)
    }
    }
    userInfo()
   },[user])

  const openModal = () => {
    setIsModalOpen(true);
    setMobile("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="flex mt-5 items-center justify-between w-[1200px] mx-auto">
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
        <button className="flex  gap-2 text-[#28A745] ">
          <TbUserFilled />
          {user.mobile}
         </button>
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
  );
}

export default Header;
