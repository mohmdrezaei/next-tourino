import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className=" flex gap-36 justify-center items-center">
      <div className="">
        <h1 className="text-4xl font-medium">صفحه مورد نظر یافت نشد!</h1>
        <button className="text-[#28A745] text-[28px]  bg-[#D8FFE1] px-10 py-3 rounded-2xl mt-20">
          <Link href="/" className="font-normal">بازگشت به صفحه اصلی</Link>
        </button>
      </div>
      <Image src="/images/ErrorTV.svg" width="555" height="555" />
    </div>
  );
}

export default NotFound;
