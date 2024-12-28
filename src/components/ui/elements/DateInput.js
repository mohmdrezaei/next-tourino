import { Controller } from "react-hook-form"
import { IoCalendarOutline } from "react-icons/io5"
import { DatePicker } from "zaman"

function DateInput({control , errors}) {
  return (
    <div  className={`flex items-center border border-gray-300 h-[57px]   col-span-full lg:col-auto rounded px-3 justify-center  lg:justify-start ${errors.birthDate && "border-red-700"}`}>
    <IoCalendarOutline className="mb-1" />
    <Controller
      control={control}
      name="birthDate"
      defaultValue=""
      render={({ field }) => (
        <DatePicker
          inputAttributes={{ placeholder: "تاریخ تولد" }}
          round="x2"
          value={field.value}
          accentColor="#28A745"
          {...field}
          inputClass="focus:outline-none px-2   placeholder-[#2C2C2C]"
          onChange={(e) => field.onChange(new Date(e.value))}
        />
      )}
    />
  </div>
  )
}

export default DateInput            