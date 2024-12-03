"use client";

import CheckOtpForm from "@/widgets/CheckOtpForm";
import Modal from "@/widgets/Modal";
import SendOtpForm from "@/widgets/SendOtpForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { TbUserFilled } from "react-icons/tb";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="flex mt-5 items-center justify-between">
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
      <button
        onClick={openModal}
        className=" border-2 border-[#28A745] text-[#28A745] py-1 px-4  rounded-lg text-center flex items-center gap-2"
      >
        <TbUserFilled />
        ورود | ثبت نام
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {step === 1 && (
          <SendOtpForm
            setStep={setStep}
            mobile={mobile}
            setMobile={setMobile}
          />
        )}
        {step === 2 && <CheckOtpForm />}
      </Modal>
    </header>
  );
}

export default Header;
