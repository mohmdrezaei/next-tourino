"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { BankInfoSchema, PersonalInfoSchema } from "@/schema/index";
import { DatePicker } from "zaman";
import { IoCalendarOutline } from "react-icons/io5";
import { DateToIso } from "@/utils/helper";

const EditForm = ({
  fields,
  onSubmit,
  onCancel,
  state,
  onChange,
  section,
  setPersonalInfo
}) => {
  const schema = section === "personal" ? PersonalInfoSchema : BankInfoSchema;
  const { register, handleSubmit , formState : {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={onChange}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-5 mt-10 md:mt-4 md:border-b pb-5"
      >
        {fields.map(({ label, name, type }) => {
          if (name === "gender") {
            return (
              <FormControl key={name} fullWidth>
                <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
                <Select
                  labelId={`select-${name}-label`}
                  id={`select-${name}`}
                  label={label}
                  name={name}
                  value={state[name]}
                  {...register(name)}
                >
                  <MenuItem value="male">مرد</MenuItem>
                  <MenuItem value="female">زن</MenuItem>
                </Select>
                {errors[name] && (
                  <p className="text-[#d32f2f] font-normal m-2">{errors[name]?.message}</p>
                )}
              </FormControl>
            );
          }
          if(type === "date"){
           return (
            <div className="flex items-center border   col-span-full lg:col-auto rounded px-3 justify-center  lg:justify-start">
            <IoCalendarOutline className="mb-1" />
            <DatePicker
            round="x2"
            accentColor="#28A745"
            inputClass="focus:outline-none px-2   placeholder-[#2C2C2C]"
            inputAttributes={{ placeholder: label }}
            value={state[name]}
            name={name}
            onChange={(e)=>setPersonalInfo((prevState) => ({
              ...prevState,
              birthDate: DateToIso(e.value),
            }))}
            
          />
          </div>
           
           )
          }
          return (
            <TextField
              key={name}
              id={`input-${name}`}
              label={label}
              variant="outlined"
              name={name}
              type={type || "text"}
              value={state[name]}
              {...register(name)}
              helperText={errors[name]?.message}
              error={!!errors[name]}
            />
          );
        })}
      </div>
      <div className="flex justify-end mt-2 ">
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
