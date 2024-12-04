import OtpInput from "react18-input-otp";

import { GoArrowLeft } from "react-icons/go";
function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const changeHandler = (otp) => {
    setCode(otp);
  };
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log({code , mobile})
  }
  return (
    <>
      <div className="flex justify-end">
        <button className="inline-block text-[#171717] text-xl " onClick={()=>setStep(1)}>
          <GoArrowLeft />
        </button>
      </div>
      <div className="px-7 text-center mt-10">
        <h2 className="text-[28px] font-[500] leading-10 text-center">
          کد تایید را وارد کنید
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mt-3 ">
            <label
              for="large-input"
              class="block mb-2 text-base font-light text-gray-900 dark:text-white"
            >
              کد تایید به شماره {mobile} ارسال شد
            </label>
            <div className="flex justify-center mt-4" dir="ltr">
            <OtpInput
              value={code}
              onChange={changeHandler}
              numInputs={6}
              
              inputStyle={{
                border: "1px solid #00000040",
                borderRadius: "4px",
                width: "40px",
                height: "40px",
                margin: "0 5px",
                textAlign: "center",
                fontSize: "16px",
                direction: "ltr",
                justifyContent: "center",
              }}
              focusStyle={{
                border: '1px solid #009eca', 
                outline: 'none', 
              }}
            />
            </div>
            <p className="mt-6 text-xs font-light">1:25 ثانبه تا ارسال مجدد کد</p>
            <button
              type="submit"
              className="block w-full bg-[#28A745] rounded-md mt-5 py-4 text-white"
            >
              ورود به تورینو
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CheckOtpForm;
