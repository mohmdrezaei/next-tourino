import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbUserFilled } from "react-icons/tb";

function Header() {
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
      <button className=" border-2 border-[#28A745] text-[#28A745] py-1 px-4  rounded text-center flex items-center gap-2">
        <TbUserFilled />
        ورود | ثبت نام
      </button>
    </header>
  );
}

export default Header;
