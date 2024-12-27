"use client"

import { useAddToBasket } from "@/services/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ReserveButton({id}) {
    const { isPending, mutate } = useAddToBasket();
  const router = useRouter()
  const addHandler = ( ) => {
   
    if(isPending) return
    mutate(id, { onSuccess: (data) => {
      router.push("/basket")
      toast.success(data.data.message)
      
    },onError:()=>{
      toast.error("مشکلی پیش آمده است!")
    } });
  };
  return (
    <button onClick={ addHandler} className="bg-[#28A745] text-white text-2xl rounded-[10px] py-3 px-12">رزرو و خرید</button>
  )
}

export default ReserveButton