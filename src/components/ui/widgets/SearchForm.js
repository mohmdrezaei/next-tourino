"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";



import { useGetTours } from "@/services/queries";
import { DateToIso, flattenObject } from "@/utils/helper";
import { TbWorldSearch } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { useRouter } from "next/navigation";
import useQuery from "@/hooks/query";
import QueryString from "qs";

function SearchFrom() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { getQuery } = useQuery();

  const { data, isPending, refetch } = useGetTours(query);
  const { register, handleSubmit, control } = useForm();

  useEffect(() => {
    refetch();
  }, [query]);

  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObject(form));

    router.push(`/?${query}`)
  };

  return (
    <form
    onSubmit={handleSubmit(submitHandler)}
          className="w-auto  h-auto lg:h-[71px] lg:w-[874px] grid  grid-cols-12  lg:grid-cols-4 p-3  gap-5 lg:border  mx-auto mt-7 rounded-[20px]"
        >
          <div className="flex items-center col-span-6 p-4 justify-center  lg:justify-start lg:p-0 lg:col-auto border lg:border-0   rounded-xl w-full  bg-0">
            <SlLocationPin className="mb-1" />
           
            
            <select
              {...register("originId")}
              class="appearance-none rounded-lg px-2 w-full  focus:outline-none "
            >
              <option value="">مبدا</option>
              <option value="2">سنندج </option>
              <option value="tabriz">تبریز</option>
              <option value="4">اصفهان</option>
              <option value="1">تهران</option>
              <option value="shiraz">شیراز</option>
            </select>
          </div>
          <div className="flex items-center col-span-6 p-4 lg:p-0 lg:col-auto   border rounded-xl w-full lg:border-0 justify-center  lg:justify-start">
            <TbWorldSearch className="mb-1" />
            <select
              className="appearance-none  px-2 w-full  focus:outline-none "
              {...register("destinationId")}
            >
              <option value="">مقصد</option>
              <option value="3">مادرید</option>
              <option value="2">سنندج </option>
              <option value="5">سلیمانیه</option>
              <option value="6">هولر</option>
              <option value="7">مازندران</option>
              <option value="8">مرکز آفرود</option>
              <option value="9">ایتالیا</option>
            </select>
          </div>
          <div className="flex items-center border lg:border-0 p-4 lg:p-0  col-span-full lg:col-auto rounded-xl justify-center  lg:justify-start">
            <IoCalendarOutline className="mb-1" />
            <Controller
        control={control}
        name="date"
        render={({ field: { onChange } }) => (
          <DatePicker
       
            round="x2"
            accentColor="#28A745"
            inputClass="focus:outline-none px-2  placeholder-[#2C2C2C]"
            inputAttributes={{ placeholder: "تاریخ" }}
            onChange={(e) =>
              onChange({
                startDate: DateToIso(e.from),
                endDate: DateToIso(e.to),
            })
            }
            range
          />
        )}
      />
          </div>
          
          <button
            type="submit"
            className=" bg-[#28A745] w-full lg:w-[190px] h-[47px] col-span-12 lg:col-auto font-normal text-2xl rounded-2xl text-white "
          >
            جستجو
          </button>
        </form>
   
   

  );
}

export default SearchFrom;