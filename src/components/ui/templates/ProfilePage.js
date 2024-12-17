"use client";

import { PiPencilSimpleLine } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useGetUser } from "@/services/queries";
import Loader from "@/elements/Loader";
import { useUpdateEmail } from "@/services/mutations";
import toast from "react-hot-toast";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

function ProfilePage() {
  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState(false);
  const [editPersonal, setEditPersonal] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    gender: "",
    birthDate: "",
    nationalCode: "",
    peyment: {
      shaba_code: "",
      debitCard_code: "",
      accountIdentifier: "",
    },
  });
  const { isPending, data, error } = useGetUser();

  useEffect(() => {
    if (data?.data) {
      setEmail(data.data.email || "");
      setPersonalInfo({
        name: data.data.name || "",
        gender: data.data.gender || "",
        birthDate: data.data.birthDate || "",
        nationalCode: data.data.nationalCode || "",
        peyment: {
          shaba_code: data.data.peyment?.shaba_code || "",
          debitCard_code: data.data.peyment?.debitCard_code || "",
          accountIdentifier: data.data.peyment?.accountIdentifier || "",
        },
      });
    }
  }, [data]);

  const personalChageHandler = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((perv)=>({
      ...perv,
      [name]: value,
    }))
  }

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
  const updatePersonalHandler =(e)=>{
    e.preventDefault();
    const {name , nationalCode , birthDate , gender} = personalInfo
  
    mutate(
      { name , nationalCode , birthDate , gender },
      {
        onSuccess: (data) => {
          setEditPersonal(false);
          toast.success("اطلاعات با موفقیت ویرایش شد");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  }

  if (isPending) return <Loader />;
  return (
    <div className="w-full mt-7 md:mt-0">
      <div className=" border border-[#00000033] h-[115px] rounded-[10px] p-3 ">
        <h4 className="font-normal text-base">اطلاعات حساب کاربری</h4>
        <div className="md:flex items-center justify-between mt-4">
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
          <button
            className="flex gap-3 mx-8 text-[#009ECA]"
            onClick={() => setEditPersonal(true)}
          >
            <PiPencilSimpleLine />
            ویرایش اطلاعات
          </button>
        </div>

        {editPersonal ? (
          <form onSubmit={updatePersonalHandler}>
            <div
              className="grid grid-cols-3 gap-7 gap-y-5 mt-4 border-b pb-5"
              dir="rtl"
            >
              <TextField
                id="outlined-basic"
                label="نام و نام خانوادگی"
                variant="outlined"
                name="name"
                value={personalInfo.name}
                onChange={personalChageHandler}
              />
              <TextField
                id="outlined-basic"
                label="کد ملی"
                variant="outlined"
                name="nationalCode"
                value={personalInfo.nationalCode}
                onChange={personalChageHandler}
              />

              <TextField
                id="outlined-basic"
                label="تاریخ تولد"
                variant="outlined"
                name="birthDate"
                value={personalInfo.birthDate}
                onChange={personalChageHandler}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="جنسیت"
                  name="gender"
                value={personalInfo.gender}
                onChange={personalChageHandler}
                >
                  <MenuItem value="male">مرد</MenuItem>
                  <MenuItem value="female">زن</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex justify-end mt-2">
              <button
                className=" mx-2 bg-[#28A745] rounded-[5px] w-36 h-10 text-white text-base font-normal"
                type="submit"
              >
                تایید
              </button>
              <button
                onClick={() => setEditPersonal(false)}
                className="mx-2 border-2 border-[#28A745] text-[#28A745] rounded-[5px] w-36 h-10 text-base font-normal"
              >
                انصراف
              </button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-2 gap-y-9 mt-5 text-sm">
            <div className="flex gap-5">
              <p>نام و نام خانوادگی</p>
              <span className=" font-medium ">{data?.data?.name}</span>
            </div>
            <div className="flex gap-5">
              <p> کد ملی </p>
              <span className="font-normal">{data?.data?.nationalCode}</span>
            </div>

            <div className="flex gap-5">
              <p>جنسیت</p>
              <span className="font-medium">{data?.data?.gender === "male" ? "مرد" : "زن"}</span>
            </div>
            <div className="flex gap-5">
              <p>تاریخ تولد</p>
              <span className="font-normal">{data?.data?.birthDate} </span>
            </div>
          </div>
        )}
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
