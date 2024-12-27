import { conversionToPersian } from '@/utils/convertPersian'
import { e2p } from '@/utils/numbers'
import React from 'react'

function PersonalInfo({data}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-9 mt-5 text-sm px-5">
    <div className="flex gap-5 justify-between sm:justify-start">
      <p>نام و نام خانوادگی</p>
      <span className=" font-medium ">
        {data?.data?.fullName || "--"}
      </span>
    </div>
    <div className="flex gap-5 justify-between sm:justify-start">
      <p> کد ملی </p>
      <span className="font-normal">
        {e2p(data?.data?.nationalCode) || "--"}
      </span>
    </div>

    <div className="flex gap-5 justify-between sm:justify-start">
      <p>جنسیت</p>
      <span className="font-medium">
        {conversionToPersian(data?.data?.gender)}
      </span>
    </div>
    <div className="flex gap-5 justify-between sm:justify-start">
      <p>تاریخ تولد</p>
      <span className="font-normal">
        {data?.data?.birthDate
          ? new Date(data?.data?.birthDate).toLocaleDateString("fa-IR")
          : "--"}
      </span>
    </div>
  </div>
  )
}

export default PersonalInfo