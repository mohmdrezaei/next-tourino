"use client"

import Modal from "@/widgets/Modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { TbUserFilled } from "react-icons/tb";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
       <div className="px-7">
       <h2 className="text-[28px] font-[500] leading-10 text-center"  > ورود به تورنیو</h2>
        <div className="mt-12">
        <label for="large-input" class="block mb-2 text-base font-light text-gray-900 dark:text-white">شماره موبایل خود را وارد کنید </label>
        <input type="text" placeholder="4253***0912" id="large-input" class="block w-full p-4 text-gray-900 border h-[54px] border-[#00000040] rounded-md"/>
        <button className="block w-full bg-[#28A745] rounded-md mt-10 py-4 text-white">ارسال کد تایید</button>
        </div>
       </div>
      </Modal>
    </header>
  );
}

export default Header;
