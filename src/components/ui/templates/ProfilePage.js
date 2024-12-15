"use client";

import { PiPencilSimpleLine } from "react-icons/pi";
import { useState } from "react";
import { useGetUser } from "@/services/queries";
import Loader from "@/elements/Loader";
import { useUpdateEmail } from "@/services/mutations";
import toast from "react-hot-toast";



function ProfilePage() {
  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState(false);
  const { isPending, data, error } = useGetUser();

  const { mutate } = useUpdateEmail();
  const updateEmailHandler = (e) => {
    e.preventDefault();

    mutate(
      { email },
      {
        onSuccess: (data) => {
          setEditEmail(false);
          toast.success("ایمیل با موفقیت ثبت شد");
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  if (isPending) return <Loader />;
  return (
    <div className="w-full">
      <div className=" border border-[#00000033] h-[115px] rounded-[10px] p-3 ">
        <h4 className="font-normal text-base">اطلاعات حساب کاربری</h4>
        <div className="flex items-center justify-between mt-4">
          <p className="mx-4 text-sm">
            شماره موبایل
            <span className="font-normal mx-5">{data?.data?.mobile}</span>
          </p>
          <form
            onSubmit={updateEmailHandler}
            className={editEmail ? "block" : "hidden"}
          >
            <input
              className="border border-[#00000080] h-12 w-64 mx-3 rounded-[5px] px-2 focus:outline-none"
              type="text"
              placeholder="آدرس ایمیل"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="mx-5 bg-[#28A745] rounded-[5px] w-[122px] h-12 text-white text-base font-normal"
              type="submit"
            >
              تایید
            </button>
          </form>
          <p className={editEmail ? "hidden" : "block"}>
            ایمیل
            <span className="mx-10">
              {data?.data?.email ? data?.data?.email : "--"}
            </span>
          </p>
          {data?.data?.email ? (
            <button
              className={`flex gap-3 mx-8 text-[#009ECA] ${
                editEmail ? "hidden" : "block"
              }`}
              onClick={() => setEditEmail(true)}
            >
              <PiPencilSimpleLine />
              ویرایش
            </button>
          ) : (
            <button
              className={`flex gap-3 mx-8 text-[#009ECA] ${
                editEmail ? "hidden" : "block"
              }`}
              onClick={() => setEditEmail(true)}
            >
              <PiPencilSimpleLine />
              افزودن
            </button>
          )}
        </div>
      </div>

      <div className=" border border-[#00000033] h-auto rounded-[10px] p-3 mt-8 ">
        <div className="flex justify-between">
          <h4 className="font-normal text-base">اطلاعات شخصی</h4>
          <button className="flex gap-3 mx-8 text-[#009ECA]">
            <PiPencilSimpleLine />
            ویرایش اطلاعات
          </button>
        </div>

        {/* <div className="grid grid-cols-2 gap-y-9 mt-5 text-sm">
          <div className="flex gap-5">
            <p>نام و نام خانوادگی</p>
            <span className=" font-medium ">
              {data?.data?.firstName} {data?.data?.lastName}
            </span>
          </div>
          <div className="flex gap-5">
            <p> کدملی </p>
            <span className="font-normal">{data?.data?.nationalCode}</span>
          </div>

          <div className="flex gap-5">
            <p>جنسیت</p>
            <span className="font-medium">{data?.data?.gender}</span>
          </div>
          <div className="flex gap-5">
            <p>تاریخ تولد</p>
            <span className="font-normal">{data?.data?.birthDate} </span>
          </div>
        </div> */}

        <form className="grid grid-cols-3 gap-7 gap-y-2 mt-4"  dir="rtl">
       
  
        
        </form>
      </div>

      <div className=" border border-[#00000033] h-[171px] rounded-[10px] p-3 mt-8 ">
        <div className="flex justify-between">
          <h4 className="font-normal text-base">اطلاعات حساب بانکی</h4>
          <button className="flex gap-3 mx-8 text-[#009ECA]">
            <PiPencilSimpleLine />
            ویرایش اطلاعات
          </button>
        </div>

        <div className="grid grid-cols-2 gap-y-9 mt-5 text-sm">
          <div className="flex gap-5">
            <p>شماره شبا</p>
            <span className=" font-medium ">
              {data?.data?.peyment?.shaba_code}
            </span>
          </div>
          <div className="flex gap-5">
            <p> شماره کارت </p>
            <span className="font-normal">
              {data?.data?.peyment?.debitCard_code}
            </span>
          </div>

          <div className="flex gap-5">
            <p>شماره حساب</p>
            <span className="font-medium">
              {data?.data?.peyment?.accountIdentifier}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
