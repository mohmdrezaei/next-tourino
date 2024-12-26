"use client";
import SelectInput from "@/elements/SelectInput";
import TextInput from "@/elements/TextInput";
import { PersonalInfoSchema } from "@/schema/index";
import { useFinalizeOrder } from "@/services/mutations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoCalendarOutline } from "react-icons/io5";
import { TbUserFilled } from "react-icons/tb";
import { DatePicker } from "zaman";

function BasketPage({ data }) {
  const [formData, setFormData] = useState({
    nationalCode: "",
    fullName: "",
    gender: "",
    birthDate: "",
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PersonalInfoSchema),
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const router = useRouter();
  const { isPending, mutate } = useFinalizeOrder();
  const submitHandler = (form) => {
    mutate(form, {
      onSuccess: (data) => {
        router.push("/");
        toast.success(data?.data?.message);
      },
      onError: () => {
        toast.error("مشکلی پیش آمده است!");
      },
    });
  };
  return (
    <div className="   lg:bg-[#F3F3F3] h-[750px] md:h-[650px] z-10 py-16 px-7 ">
      <form
        className="lg:flex gap-3  h-auto justify-center"
        onSubmit={handleSubmit(submitHandler)}
        onChange={changeHandler}
      >
        <div className=" bg-white  py-7 px-5 border md:w-[865px] rounded-[10px] border-[#00000033] lg:border-none  mb-10 lg:mb-0">
          <h1 className="flex gap-3">
            <TbUserFilled />
            مشخصات مسافر
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 justify-center">
          <TextInput name="fullName" label = "نام و نام خانوادگی" value = {formData.fullName} errors = {errors} register= {register} />
          <TextInput name="nationalCode" label = "کد ملی" value = {formData.nationalCode} errors = {errors} register= {register} />
            
            <div className="flex items-center border rounded px-3 h-[50px] ">
              <IoCalendarOutline className="mb-1" />

              <Controller
                control={control}
                name="birthDate"
                render={({ field: { onChange } }) => (
                  <DatePicker
                    inputAttributes={{ placeholder: "تاریخ تولد" }}
                    round="x2"
                    accentColor="#28A745"
                    inputClass="focus:outline-none px-2   placeholder-[#2C2C2C]"
                    onChange={(e) => onChange({birthDate : e.value})}
                  />
                )}
              />
            </div>
            <SelectInput
                name="gender"
                value={formData.gender}
                label="جنسیت"
                control={control}
                errors={errors}
              />
          </div>
        </div>

        <div className=" bg-white py-5 px-3 h-[228px]  border rounded-[10px] border-[#00000033] lg:border-none">
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
