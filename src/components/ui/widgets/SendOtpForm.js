import { useSendOtp } from "src/core/services/mutations";
import toast from "react-hot-toast";

function SendOtpForm({ mobile, setMobile, setStep, onClose }) {
  const { isPending, mutate } = useSendOtp();

  const isValidMobile = (mobile) => {
    const mobileRegex = /^09\d{9}$/;
    return mobileRegex.test(mobile);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (!isValidMobile(mobile)) {
      toast.error("شماره موبایل نامعتبر است");
      return
    }
    if (isPending) return;

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };
  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="inline-block text-[#171717] text-xl "
        >
          &times;
        </button>
      </div>
      <div className="px-7">
        <h2 className="text-[28px] font-[500] leading-10 text-center">
          ورود به تورنیو
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mt-12">
            <label
              for="large-input"
              className="block mb-2 text-base font-light text-gray-900 dark:text-white"
            >
              شماره موبایل خود را وارد کنید
            </label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="4253***0912"
              id="large-input"
              className="block w-[278px] md:w-full p-4 text-gray-900 border h-[54px] border-[#00000040] rounded-md"
            />
            <button
              type="submit"
              className="block w-full bg-[#28A745] rounded-md mt-10 py-4 text-white "
            >
              ارسال کد تایید
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SendOtpForm;
