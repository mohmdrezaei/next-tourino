"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className=" flex flex-col-reverse lg:flex-row gap-y-0 gap-36 justify-center items-center mb-40">
      <div className="">
        <h1 className="text-4xl font-medium">ارتباط با سرور برقرار نیست!</h1>
        <button className="font-normal text-2xl mt-5">
          لطفا بعدا دوباره امتحان کنید.
        </button>
      </div>
      <Image src="/images/ErrorLampRobot.svg" width="555" height="555" />
    </div>
  );
}

export default NotFound;
