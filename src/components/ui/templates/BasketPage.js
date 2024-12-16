"use client";
import { useFinalizeOrder } from "@/services/mutations";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { TbUserFilled } from "react-icons/tb";

function BasketPage({ data }) {
  const [formData, setFormData] = useState({
    nationalCode: "",
    fullName: "",
    gender: "",
    birthDate: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
const router = useRouter()
  const { isPending, mutate } = useFinalizeOrder();
  const submitHandler = (event) => {
    event.preventDefault()
    const { nationalCode, fullName, gender, birthDate } = formData;
    mutate(
      { nationalCode, fullName, gender, birthDate },
      {
        onSuccess: (data) => {
          router.push("/");
          toast.success(data?.data?.message);
        },
        onError: () => {
          toast.error("مشکلی پیش آمده است!");
        },
      }
    );
  };
  return (
    <div className="   lg:bg-[#F3F3F3] h-[750px] md:h-[650px] z-10 py-16 px-7 ">
      <form
        className="lg:flex gap-3  h-[228px] justify-center"
        onSubmit={submitHandler}
        onChange={changeHandler}
      >
        <div className=" bg-white  py-7 px-5 border rounded-[10px] border-[#00000033] lg:border-none  mb-10 lg:mb-0">
          <h1 className="flex gap-3">
            <TbUserFilled />
            مشخصات مسافر
          </h1>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7 mt-5 justify-center">
            <input
              className="border border-[#00000080] w-[262px] h-[50px] rounded-[5px] px-2"
              type="text"
              name="fullName"
              placeholder="نام و نام خانوادگی"
            />
            <input
              className="border border-[#00000080] w-[262px] h-[50px] rounded-[5px] px-2"
              type="text"
              name="nationalCode"
              placeholder="کد ملی"
            />
            <input
              className="border border-[#00000080] w-[262px] h-[50px] rounded-[5px] px-2"
              type="date"
              name="birthDate"
              placeholder="تاریخ تولد"
            />
            <input
              className="border border-[#00000080] w-[262px] h-[50px] rounded-[5px] px-2"
              type="text"
              placeholder="جنسیت"
              name="gender"
            />
          </div>
        </div>

        <div className=" bg-white py-5 px-3  border rounded-[10px] border-[#00000033] lg:border-none">
          <div className="flex justify-between border-dashed border-b-2 boreder-[#00000080] pb-4">
            <h3 className="text-2xl font-medium">{data?.title}</h3>
            <p className="text-[#282828] text-base">5 روز و 4 شب</p>
          </div>
          <div className="flex mt-6 justify-between items-center">
            <p>قیمت نهایی</p>
            <p className="text-[16px] px-1">
              <span className="text-[#009eca] text-[28px] font-normal px-1">
                {data?.price}
              </span>
              تومان
            </p>
          </div>
          <button
            type="submit"
            className="bg-[#28A745] text-white text-2xl rounded-[10px] py-3 px-12 w-full mt-6"
          >
            ثبت و خرید نهایی
          </button>
        </div>
      </form>
    </div>
  );
}

export default BasketPage;
