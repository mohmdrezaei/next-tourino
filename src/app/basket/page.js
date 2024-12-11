"use client"
import api from "@/configs/api"
import BasketPage from "@/pages/BasketPage"
import { useEffect, useState } from "react"

function Basket() {
  const [basket , setBasket] = useState({})
  useEffect(()=>{
    const getBasket = async()=>{
      const data = await api.get("/basket")
      setBasket(data.data)
      console.log(data)
    }
    getBasket()
  },[])
  return (
    <BasketPage  data={basket}/>
  )
}

export default Basket