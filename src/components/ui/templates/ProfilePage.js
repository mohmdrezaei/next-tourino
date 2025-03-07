"use client";
import { PiPencilSimpleLine } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useGetUser } from "@/services/queries";
import Loader from "@/elements/Loader";
import { useUpdateEmail } from "@/services/mutations";
import toast from "react-hot-toast";
import EditForm from "@/widgets/EditForm";
import { e2p } from "@/utils/numbers";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailSchema } from "@/schema/index";
import PersonalInfo from "@/widgets/PersonalInfo";
import BankAccountInfo from "@/widgets/BankAccountInfo";

function ProfilePage() {
  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState(false);
  const [editSection, setEditSection] = useState(null);
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
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
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });

  useEffect(() => {
    if (data?.data) {
      setEmail(data.data.email || "");
      setPersonalInfo({
        fullName: data.data.fullName || "",
        gender: data.data.gender || "",
        birthDate: data.data.birthDate || "",
        nationalCode: data.data.nationalCode || "",
        shaba_code: data.data.payment?.shaba_code || "",
        debitCard_code: data.data.payment?.debitCard_code || "",
        accountIdentifier: data.data.payment?.accountIdentifier || "",
      });
      setValue('gender', data.data.gender);
      setValue('birthDate', data.data.birthDate);
    }
  }, [data , setValue]);

  const personalChageHandler = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  const { mutate } = useUpdateEmail();
  const updateEmailHandler = (email) => {
    mutate(email, {
      onSuccess: (data) => {
        setEditEmail(false);
        toast.success("ایمیل با موفقیت ثبت شد");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const updatePersonalHandler = (form) => {
    if (isPending) return;
    
    mutate(form, {
      onSuccess: (data) => {
        setEditSection(null);
        toast.success("اطلاعات با موفقیت ویرایش شد");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };
  const updateBankAccountHandler = (form) => {
    if (isPending) return;

    mutate(
      { payment: form },
      {
        onSuccess: (data) => {
          setEditSection(null);
          toast.success("اطلاعات با موفقیت ویرایش شد");
          console.log(data)
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
              className={`border border-[#00000080] h-12 w-auto sm:w-64 me-3 rounded-[5px] px-2 focus:outline-none ${
                errors?.email && "border border-[#d32f2f]"
              }`}
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
            <p className="text-[#d32f2f] font-normal m-1 mx-2">
              {errors.email?.message}
            </p>
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

      <div className=" border border-[#00000033] h-auto rounded-[10px] py-3  mt-8 ">
        <div className="flex justify-between px-5">
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
          
          <EditForm
            fields={[
              { label: "نام و نام خانوادگی", name: "fullName" },
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
          <PersonalInfo data={data} />
        )}
      </div>

      <div className=" border border-[#00000033]  h-auto rounded-[10px] py-3  mt-8 ">
        <div className="flex justify-between px-5">
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
          <EditForm
            fields={[
              { label: "شماره شبا", name: "shaba_code" },
              { label: "شماره کارت", name: "debitCard_code" },
              { label: "شماره حساب ", name: "accountIdentifier" },
            ]}
            onSubmit={updateBankAccountHandler}
            onCancel={() => setEditSection(null)}
            state={personalInfo}
            onChange={personalChageHandler}
            section="account"
          />
        ) : (
         <BankAccountInfo data={data} />
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
