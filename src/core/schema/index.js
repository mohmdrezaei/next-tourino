
import { object, string  } from 'yup';
 const PersonalInfoSchema = object({
    fullName: string().required("نام و نام خانوادگی الزامی است"),
    nationalCode: string().required("کد ملی الزامی است"),
    gender: string().required("جنسیت الزامی است"),
    birthDate: string().required("تاریخ تولد را وارد کنید"),
  });
  
  const BankInfoSchema = object({
    shaba_code: string().required("شماره شبارا وارد کنید"),
    debitCard_code: string().length(16, "شماره کارت باید ۱۶ عدد باشد").required("شماره کارت را وارد کنید"),
    accountIdentifier: string()
      .min(8, "باید حداقل ۸ کاراکتر باشد")
      .max(16, "شماره حساب نباید بیشتر از 16 رقم باشد")
      .required("شماره حساب را وارد کنید"),
  });

  const emailSchema = object({
    email: string().required("ایمیل را وارد کنید").email("یک ایمیل معتبر وارد کنید")
  });

  export {PersonalInfoSchema, BankInfoSchema , emailSchema}