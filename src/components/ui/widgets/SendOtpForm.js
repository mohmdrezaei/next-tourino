import { sendOtp } from "@/services/auth";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async(event) => {
    event.preventDefault();
    if(mobile.length !== 11) return

    
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="px-7">
        <h2 className="text-[28px] font-[500] leading-10 text-center">
          ورود به تورنیو
        </h2>
        <div className="mt-12">
          <label
            for="large-input"
            class="block mb-2 text-base font-light text-gray-900 dark:text-white"
          >
            شماره موبایل خود را وارد کنید
          </label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="4253***0912"
            id="large-input"
            class="block w-full p-4 text-gray-900 border h-[54px] border-[#00000040] rounded-md"
          />
          <button
            type="submit"
            className="block w-full bg-[#28A745] rounded-md mt-10 py-4 text-white"
          >
            ارسال کد تایید
          </button>
        </div>
      </div>
    </form>
  );
}

export default SendOtpForm;
