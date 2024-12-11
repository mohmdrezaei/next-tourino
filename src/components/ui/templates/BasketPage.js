import { TbUserFilled } from "react-icons/tb";

function BasketPage({data}) {
  return (
    <div className="  bg-[#F3F3F3] h-[650px] z-10 pt-16 ">
        <div className="flex gap-3 h-[228px] justify-center">
        <div className=' bg-white  py-7 px-5 rounded-[10px]'>
         <h1 className="flex gap-3"> 
            <TbUserFilled />
            مشخصات مسافر
         </h1>
         <div className="grid grid-cols-3 gap-7 mt-5">
            <input className="border border-[#00000080] w-[262px] h-[50px] rounded-[5px] px-2" type="text" placeholder="نام و نام خانوادگی" />
            <input className="border border-[#00000080] w-[262px] h-[50px] rounded-[5px] px-2"  type="text" placeholder="کد ملی" />
            <input className="border border-[#00000080] w-[262px] h-[50px] rounded-[5px] px-2"  type="text" placeholder="تاریخ تولد" />
            <input className="border border-[#00000080] w-[262px] h-[50px] rounded-[5px] px-2"  type="text" placeholder="جنسیت"/>
         </div>
        </div>

      <div className=" bg-white py-5 px-3 rounded-[10px]"> 
        <div className="flex justify-between border-dashed border-b-2 boreder-[#00000080] pb-4">
            <h3 className="text-2xl font-medium">{data?.title}</h3>
            <p className="text-[#282828] text-base">5 روز و 4 شب</p>
        </div>
        <div className="flex mt-6 justify-between items-center">
            <p>قیمت نهایی</p>
            <p className="text-[16px] px-1">
                <span className="text-[#009eca] text-[28px] font-normal px-1">{data?.price}</span> تومان
              </p>
        </div>
        <button className="bg-[#28A745] text-white text-2xl rounded-[10px] py-3 px-12 w-full mt-6"> ثبت و خرید نهایی </button>
     
      </div>
      </div>
    </div>
  )
}

export default BasketPage