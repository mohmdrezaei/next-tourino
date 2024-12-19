"use client"

import Loader from "@/elements/Loader"
import { useGetUser } from "@/services/queries"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

function AuthProvider({children}) {
    const router =useRouter()
  const {isPending , data} =useGetUser()
  
  useEffect(()=>{
    if(!isPending && !data?.data) router.push("/")
  },[isPending])

  if(isPending) return <Loader/>

  return children
}

export default AuthProvider