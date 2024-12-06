import Image from "next/image";
export default function Home() {
  return (
    <div className=" ">
      <Image
        className="w-full mt-3"
        src="/images/landing.svg"
        width="1440"
        height="350"
      />

      <div className="text-center mt-5">
        <h4 className="text-[28px] font-medium text-[#595959]  tracking-wider">
          <sapn className="text-[#35ac50] font-medium tracking-wider">
            تورینو
          </sapn>{" "}
          برگزار کننده بهترین تور های داخلی و خارجی
        </h4>
      </div>

      <div className="w-[1200px] mx-auto">
        <h3 className="font-normal text-[32px] tracking-wide">همه تور ها</h3>
        <div className="grid grid-cols-4 mt-3git a">
          <div class="w-[278px] bg-white border border-[#0000001F] drop-shadow-sm rounded-[10px] ">
            <a href="#">
              <Image
                class="rounded-t-lg"
                src="/images/arbil.svg"
                alt=""
                width="278"
                height="159"
              />
            </a>
            <div class="px-5 pt-3 border border-b-[#D9D9D9]">
              <a href="#">
                <h5 class="mb-2 text-[27px] font-normal tracking-tight text-gray-900 dark:text-white">
                  اربیل
                </h5>
              </a>
              <p class="mb-3 font-normal text-[#282828B2] dark:text-gray-400">
                مهرماه . 3 روزه- پرواز - هتل3 س...
              </p>
            </div>
            <div className="flex justify-between px-3 py-2 text-base ">
              <button className="bg-[#28A745] text-white rounded px-5">
                رزرو
              </button>
              <p className="text-[16px] px-1">
                <span className="text-[#009eca] px-1">17500000</span> تومان
              </p>
            </div>
          </div>
          <div class="w-[278px] bg-white border border-[#0000001F] drop-shadow-sm rounded-[10px] ">
            <a href="#">
              <Image
                class="rounded-t-lg"
                src="/images/arbil.svg"
                alt=""
                width="278"
                height="159"
              />
            </a>
            <div class="px-5 pt-3 border border-b-[#D9D9D9]">
              <a href="#">
                <h5 class="mb-2 text-[27px] font-normal tracking-tight text-gray-900 dark:text-white">
                  اربیل
                </h5>
              </a>
              <p class="mb-3 font-normal text-[#282828B2] dark:text-gray-400">
                مهرماه . 3 روزه- پرواز - هتل3 س...
              </p>
            </div>
            <div className="flex justify-between px-3 py-2 text-base ">
              <button className="bg-[#28A745] text-white rounded px-5">
                رزرو
              </button>
              <p className="text-[16px] px-1">
                <span className="text-[#009eca] px-1">17500000</span> تومان
              </p>
            </div>
          </div>
          <div class="w-[278px] bg-white border border-[#0000001F] drop-shadow-sm rounded-[10px] ">
            <a href="#">
              <Image
                class="rounded-t-lg"
                src="/images/arbil.svg"
                alt=""
                width="278"
                height="159"
              />
            </a>
            <div class="px-5 pt-3 border border-b-[#D9D9D9]">
              <a href="#">
                <h5 class="mb-2 text-[27px] font-normal tracking-tight text-gray-900 dark:text-white">
                  اربیل
                </h5>
              </a>
              <p class="mb-3 font-normal text-[#282828B2] dark:text-gray-400">
                مهرماه . 3 روزه- پرواز - هتل3 س...
              </p>
            </div>
            <div className="flex justify-between px-3 py-2 text-base ">
              <button className="bg-[#28A745] text-white rounded px-5">
                رزرو
              </button>
              <p className="text-[16px] px-1">
                <span className="text-[#009eca] px-1">17500000</span> تومان
              </p>
            </div>
          </div>

          <div class="w-[278px] bg-white border border-[#0000001F] drop-shadow-sm rounded-[10px] ">
    <a href="#">
        <Image class="rounded-t-lg" src="/images/arbil.svg" alt="" width="278" height="159" />
    </a>
    <div class="px-5 pt-3 border border-b-[#D9D9D9]">
        <a href="#">
            <h5 class="mb-2 text-[27px] font-normal tracking-tight text-gray-900 dark:text-white">اربیل</h5>
        </a>
        <p class="mb-3 font-normal text-[#282828B2] dark:text-gray-400">مهرماه . 3 روزه- پرواز - هتل3 س...</p>
       
    </div>
    <div className="flex justify-between px-3 py-2 text-base ">
      <button className="bg-[#28A745] text-white rounded px-5">رزرو</button>
      <p className="text-[16px] px-1"><span className="text-[#009eca] px-1">17500000</span> تومان</p>
    </div>
</div>
        </div>
      </div>
    </div>
  );
}
