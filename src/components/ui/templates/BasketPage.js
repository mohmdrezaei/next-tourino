"use client";
import DateInput from "@/elements/DateInput";
import Loader from "@/elements/Loader";
import SelectInput from "@/elements/SelectInput";
import TextInput from "@/elements/TextInput";
import { PersonalInfoSchema } from "@/schema/index";
import { useFinalizeOrder } from "@/services/mutations";
import { useGetBasket, useGetUser } from "@/services/queries";
import PersonalInfo from "@/widgets/PersonalInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { TbUserFilled } from "react-icons/tb";


function BasketPage() {
  const [formData, setFormData] = useState({
    nationalCode: "",
    fullName: "",
    gender: "",
    birthDate: "",
  });
  const { data, isPending } = useGetBasket();
  const { data : userData } = useGetUser();
  
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
  const {mutate } = useFinalizeOrder();
  const submitHandler = (form) => {
    const { fullName, nationalCode , birthDate , gender } = userData.data;
    const data = fullName && gender  ? { fullName, nationalCode , birthDate , gender }: form
    mutate(data, {
      onSuccess: (data) => {
        router.push("/profile/tours");
        toast.success(data?.data?.message);
      },
      onError: () => {
        toast.error("مشکلی پیش آمده است!");
      },
    });
    
  };
  if(isPending) return <Loader/>
  return (
    <div className="   lg:bg-[#F3F3F3] h-[750px] md:h-[650px] z-10 py-16 px-7 ">
      {!data ?  (
<div className="bg-white w-full m-auto h-[200px] flex flex-col justify-center items-center  py-7 px-5 border md:w-[865px] rounded-[10px] border-[#00000033] lg:border-none  mb-10 lg:mb-0">
 <h3 className="text-2xl font-normal">سبد خرید شما خالی است!</h3>
 <button className="text-[#28A745] text-lg bg-[#D8FFE1] px-10 py-3 rounded-2xl  mt-7">
          <Link href="/" className="font-normal">بازگشت به صفحه اصلی</Link>
        </button>
</div>
      ): (
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
        {userData?.data?.fullName && userData?.data?.gender  ? (
         <PersonalInfo data={userData} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 justify-center">
          <TextInput name="fullName" label = "نام و نام خانوادگی" value = {formData.fullName} errors = {errors} register= {register} />
          <TextInput name="nationalCode" label = "کد ملی" value = {formData.nationalCode} errors = {errors} register= {register} />
            
          <DateInput control={control} errors={errors} />
            <SelectInput
                name="gender"
                value={formData.gender}
                label="جنسیت"
                control={control}
                errors={errors}
              />
          </div>
        ) }
        </div>

        <div className=" bg-white py-5 px-3 h-[228px]  border rounded-[10px] border-[#00000033] lg:border-none">
          <div className="flex justify-between border-dashed border-b-2 boreder-[#00000080] pb-4">
            <h3 className="text-2xl font-medium">{data?.data?.title}</h3>
            <p className="text-[#282828] text-base">5 روز و 4 شب</p>
          </div>
          <div className="flex mt-6 justify-between items-center">
            <p>قیمت نهایی</p>
            <p className="text-[16px] px-1">
              <span className="text-[#009eca] text-[28px] font-normal px-1">
                {data?.data?.price}
              </span>
              تومان
            </p>
          </div>
          <button
          onClick={userData?.data?.fullName && userData?.data?.gender ? submitHandler : null}
            type="submit"
            className="bg-[#28A745] text-white text-2xl rounded-[10px] py-3 px-12 w-full mt-6"
          >
            ثبت و خرید نهایی
          </button>
        </div>
      </form>
      )}
      
    </div>
  );
}

export default BasketPage;
