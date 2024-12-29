"use client"

import { useAddToBasket } from "@/services/mutations";
import { useGetUser } from "@/services/queries";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ReserveButton({id}) {
   const {data} = useGetUser()
    const { isPending, mutate } = useAddToBasket();
  const router = useRouter()
  const addHandler = ( ) => {
   
    if(isPending) return
    if(!data) {
      toast.error("برای رزرو تور ابتدا وارد سایت شوید!")
      return
    }
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