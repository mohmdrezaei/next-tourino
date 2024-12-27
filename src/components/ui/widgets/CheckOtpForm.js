import OtpInput from "react18-input-otp";

import { GoArrowLeft } from "react-icons/go";
import { setCookie } from "src/core/utils/cookie";
import { useCheckOtp, useSendOtp } from "src/core/services/mutations";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
function CheckOtpForm({ mobile, setStep, closeModal, setIsLoggedIn }) {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(85); // 1 minute and 25 seconds
  const { isPending, mutate } = useCheckOtp();
  const {  mutate: sendMutate } = useSendOtp();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const changeHandler = (otp) => {
    setCode(otp);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    if (code.length !== 6) return;
    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          closeModal();
          setIsLoggedIn(true);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  const resendOtp = () => {
    sendMutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
    setTimeLeft(85); 
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  return (
    <>
      <div className="flex justify-end">
        <button
          className="inline-block text-[#171717] text-xl "
          onClick={() => setStep(1)}
        >
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
              htmlFor="large-input"
              className="block mb-2 text-base font-light text-gray-900 dark:text-white"
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
                }}
                focusStyle={{
                  border: "1px solid #009eca",
                  outline: "none",
                }}
              />
            </div>
           <div className=" flex mt-6 items-center justify-center text-xs font-light">
           <p className="mx-2">
            {timeLeft > 0 ? `${formatTime(timeLeft)} ثانیه تا ارسال مجدد کد` : "کد را مجددا ارسال کنید:"}
            </p>
            {timeLeft === 0 && (
              <button
              
                className="block  text-blue-500 text-sm "
                onClick={resendOtp}
              >
                ارسال مجدد کد 
              </button>
            )}
           </div>
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
