"use client";

import { PiPencilSimpleLine } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useGetUser } from "@/services/queries";
import Loader from "@/elements/Loader";
import { useUpdateEmail } from "@/services/mutations";
import toast from "react-hot-toast";
import EditProfileForm from "@/widgets/EditProfileForm";
import { conversionToPersian } from "@/utils/convertPersian";
import { e2p } from "@/utils/numbers";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { emailSchema } from "@/schema/index";

function ProfilePage() {
  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState(false);
  const [editSection, setEditSection] = useState(null);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    gender: "",
    birthDate: "",
    nationalCode: "",
    shaba_code: "",
    debitCard_code: "",
    accountIdentifier: "",
  });
  const { isPending, data, error } = useGetUser();

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  })

  useEffect(() => {
    if (data?.data) {
      setEmail(data.data.email || "");
      setPersonalInfo({
        name: data.data.name || "",
        gender: data.data.gender || "",
        birthDate: data.data.birthDate || "",
        nationalCode: data.data.nationalCode || "",
        shaba_code: data.data.peyment?.shaba_code || "",
        debitCard_code: data.data.peyment?.debitCard_code || "",
        accountIdentifier: data.data.peyment?.accountIdentifier || "",
      });
    }
  }, [data]);
  const personalChageHandler = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { mutate } = useUpdateEmail();
  const updateEmailHandler = (email) => {
  
    mutate(
      email,
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
  const updatePersonalHandler = (e) => {
  
    if (isPending) return;

    const {
      name,
      nationalCode,
      birthDate,
      gender,
      debitCard_code,
      shaba_code,
      accountIdentifier,
    } = personalInfo;

    mutate(
      {
        name,
        nationalCode,
        birthDate,
        gender,
        peyment: { debitCard_code, shaba_code, accountIdentifier },
      },
      {
        onSuccess: (data) => {
          setEditSection(null);
          toast.success("اطلاعات با موفقیت ویرایش شد");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  if (isPending) return <Loader />;
  return (
    <div className="w-full mt-7 md:mt-0">
      <div className=" border border-[#00000033] h-auto rounded-[10px] py-3 px-5 ">
        <h4 className="font-normal text-base">اطلاعات حساب کاربری</h4>
        <div className="lg:grid grid-cols-2 items-center justify-between mt-4">
          <div className="flex gap-5 justify-between lg:justify-start mb-8 lg:mb-0">
            <p className="text-sm">شماره موبایل</p>
            <span className=" font-normal ">{e2p(data?.data?.mobile)}</span>
          </div>
          <form
            onSubmit={handleSubmit(updateEmailHandler)}
            className={editEmail ? "block" : "hidden"}
          >
            <input
              className={`border border-[#00000080] h-12 w-auto sm:w-64 me-3 rounded-[5px] px-2 focus:outline-none ${errors?.email && "border border-[#d32f2f]"}` }
              type="text"
              placeholder="آدرس ایمیل"
               name="email"
               defaultValue={email}
               
              {...register("email")}
            />
            <button
              className="lg:mx-5 bg-[#28A745] rounded-[5px] w-[122px] h-12 text-white text-base font-normal"
              type="submit"
              >
              تایید
            </button>
              <p className="text-[#d32f2f] font-normal m-1 mx-2">{errors.email?.message}</p>
          </form>
          <div className="flex justify-between">
            <p className={editEmail ? "hidden" : "block"}>
              ایمیل
              <span className=" mx-5 sm:mx-10">
                {data?.data?.email || "--"}
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
      </div>

      <div className=" border border-[#00000033] h-auto rounded-[10px] py-3 px-5 mt-8 ">
        <div className="flex justify-between">
          <h4 className="font-normal text-base">اطلاعات شخصی</h4>
          <button
            className="flex gap-3  text-[#009ECA]"
            onClick={() => setEditSection("personal")}
          >
            <PiPencilSimpleLine />
            ویرایش اطلاعات
          </button>
        </div>

        {editSection === "personal" ? (
          <EditProfileForm
            fields={[
              { label: "نام و نام خانوادگی", name: "name" },
              { label: "کد ملی", name: "nationalCode" },
              { label: "تاریخ تولد", name: "birthDate", type: "date" },
              { label: "جنسیت", name: "gender" },
            ]}
            onSubmit={updatePersonalHandler}
            onCancel={() => setEditSection(null)}
            state={personalInfo}
            onChange={personalChageHandler}
             section="personal"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-9 mt-5 text-sm">
            <div className="flex gap-5 justify-between sm:justify-start">
              <p>نام و نام خانوادگی</p>
              <span className=" font-medium ">{data?.data?.name || "--"}</span>
            </div>
            <div className="flex gap-5 justify-between sm:justify-start">
              <p> کد ملی </p>
              <span className="font-normal">
                {e2p(data?.data?.nationalCode) || "--"}
              </span>
            </div>

            <div className="flex gap-5 justify-between sm:justify-start">
              <p>جنسیت</p>
              <span className="font-medium">
                {conversionToPersian(data?.data?.gender)}
              </span>
            </div>
            <div className="flex gap-5 justify-between sm:justify-start">
              <p>تاریخ تولد</p>
              <span className="font-normal">
                {data?.data?.birthDate ? new Date(data?.data?.birthDate).toLocaleDateString("fa-IR") : "--"}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className=" border border-[#00000033]  h-auto rounded-[10px] py-3 px-5 mt-8 ">
        <div className="flex justify-between">
          <h4 className="font-normal text-base">اطلاعات حساب بانکی</h4>
          <button
            className="flex gap-3  text-[#009ECA]"
            onClick={() => setEditSection("account")}
          >
            <PiPencilSimpleLine />
            ویرایش اطلاعات
          </button>
        </div>

        {editSection === "account" ? (
          <EditProfileForm
            fields={[
              { label: "شماره شبا", name: "shaba_code" },
              { label: "شماره کارت", name: "debitCard_code" },
              { label: "شماره حساب ", name: "accountIdentifier" },
            ]}
            onSubmit={updatePersonalHandler}
            onCancel={() => setEditSection(null)}
            state={personalInfo}
            onChange={personalChageHandler}
             section="account"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-9 mt-5 text-sm">
            <div className="flex gap-5 justify-between sm:justify-start">
              <p>شماره شبا</p>
              <span className=" font-medium ">
                {e2p(data?.data?.peyment?.shaba_code) || "--"} 
              </span>
            </div>
            <div className="flex gap-5 justify-between sm:justify-start">
              <p> شماره کارت </p>
              <span className="font-normal">
                {e2p(data?.data?.peyment?.debitCard_code) || "--"}
              </span>
            </div>

            <div className="flex gap-5  justify-between sm:justify-start">
              <p>شماره حساب</p>
              <span className="font-medium">
                {e2p(data?.data?.peyment?.accountIdentifier) || "--"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
