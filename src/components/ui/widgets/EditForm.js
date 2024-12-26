"use client";

import { Controller, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { BankInfoSchema, PersonalInfoSchema } from "@/schema/index";
import { DatePicker } from "zaman";
import { IoCalendarOutline } from "react-icons/io5";
import TextInput from "@/elements/TextInput";
import SelectInput from "@/elements/SelectInput";

const EditForm = ({ fields, onSubmit, onCancel, state, onChange, section }) => {
  const schema = section === "personal" ? PersonalInfoSchema : BankInfoSchema;
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
      <div className="grid grid-cols-1 md:grid-cols-2 px-5 lg:grid-cols-3 gap-7 gap-y-5 mt-10 md:mt-4 md:border-b pb-5">
        {fields.map(({ label, name, type }) => {
          if (name === "gender") {
            return (
              <SelectInput
               key={name}
                name={name}
                value={state[name]}
                label={label}
                control={control}
                errors={errors}
              />
            );
          }
          if (type === "date") {
            return (
              <div className="flex items-center border   col-span-full lg:col-auto rounded px-3 justify-center  lg:justify-start">
                <IoCalendarOutline className="mb-1" />
                <Controller
                  control={control}
                  name="birthDate"
                  value={state[name]}
                  render={({ field: { onChange } }) => (
                    <DatePicker
                      inputAttributes={{ placeholder: "تاریخ تولد" }}
                      round="x2"
                      accentColor="#28A745"
                      inputClass="focus:outline-none px-2   placeholder-[#2C2C2C]"
                      onChange={(e) => onChange(new Date(e.value))}
                    />
                  )}
                />
              </div>
            );
          }
          return (
            <TextInput
              key={name}
              name={name}
              label={label}
              value={state[name]}
              errors={errors}
              register={register}
            />
          );
        })}
      </div>
      <div className="flex justify-end mt-2 px-5">
        <button
          className="mx-2  bg-[#28A745] rounded-[5px] w-full md:w-36 h-10 text-white text-base font-normal"
          type="submit"
        >
          تایید
        </button>
        <button
          onClick={onCancel}
          className="mx-2 border-2 border-[#28A745] text-[#28A745] rounded-[5px] w-full md:w-36 h-10 text-base font-normal"
          type="button"
        >
          انصراف
        </button>
      </div>
    </form>
  );
};

export default EditForm;
