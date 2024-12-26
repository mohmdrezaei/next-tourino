import React from "react";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
function SelectInput({ name, value, label, control, errors }) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={value}
        render={({ field: { onChange, value } }) => (
          <Select
            labelId={`select-${name}-label`}
            id={`select-${name}`}
            label={label}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            className="w-full"
          >
            <MenuItem value="male">مرد</MenuItem>
            <MenuItem value="female">زن</MenuItem>
          </Select>
        )}
      />
      {errors[name] && (
        <p className="text-[#d32f2f] font-normal m-2">
          {errors[name]?.message}
        </p>
      )}
    </FormControl>
  );
}

export default SelectInput;
