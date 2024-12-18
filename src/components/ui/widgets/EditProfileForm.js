import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const EditProfileForm = ({ fields, onSubmit, onCancel, state, onChange }) => (
  <form onSubmit={onSubmit}>
    <div className="grid grid-cols-3 gap-7 gap-y-5 mt-4 border-b pb-5" dir="rtl">
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
                onChange={onChange}
              >
                <MenuItem value="male">مرد</MenuItem>
                <MenuItem value="female">زن</MenuItem>
              </Select>
            </FormControl>
          );
        }
        return (
          <TextField
            key={name}
            id={`input-${name}`}
            label={label}
            variant="outlined"
            name={name}
            type={type || "text"}
            value={name.includes(".") ? name.split(".").reduce((o, i) => o[i], state) : state[name]}
            onChange={onChange}
          />
        );
      })}
    </div>
    <div className="flex justify-end mt-2">
      <button
        className="mx-2 bg-[#28A745] rounded-[5px] w-36 h-10 text-white text-base font-normal"
        type="submit"
      >
        تایید
      </button>
      <button
        onClick={onCancel}
        className="mx-2 border-2 border-[#28A745] text-[#28A745] rounded-[5px] w-36 h-10 text-base font-normal"
        type="button"
      >
        انصراف
      </button>
    </div>
  </form>
);

export default EditProfileForm