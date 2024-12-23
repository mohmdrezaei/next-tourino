
import { object, string , date  } from 'yup';
 const PersonalInfoSchema = object({
    name: string().required("نام و نام خانوادگی الزامی است"),
    nationalCode: string().required("کد ملی الزامی است"),
    birthDate: date().required("تاریخ تولد الزامی است"),
    gender: string().required("جنسیت الزامی است"),
  });
  
  const BankInfoSchema = object({
    shaba_code: string().required("شماره شبارا وارد کنید"),
    debitCard_code: string().length(16, "شماره کارت باید ۱۶ عدد باشد").required("شماره کارت را وارد کنید"),
    accountIdentifier: string()
      .min(8, "باید حداقل ۸ کاراکتر باشد")
      .max(16, "شماره حساب نباید بیشتر از 16 رقم باشد")
      .required("شماره حساب را وارد کنید"),
  });
  export {PersonalInfoSchema, BankInfoSchema}