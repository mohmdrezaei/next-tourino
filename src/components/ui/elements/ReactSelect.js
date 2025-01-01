import { Controller } from "react-hook-form";
import Select from "react-select";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "none",
    borderRadius: "8px",
    boxShadow: state.isFocused ? "none" : provided.boxShadow,
  }),
  menu: (provided) => ({ ...provided, borderRadius: "8px" }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#28A745" : "#fff",
    color:  "#000",
    "&:hover": { backgroundColor: "#f4f4f4" },
  }),
  indicatorsContainer: (provided) => ({ ...provided, display: "none" }),
  dropdownIndicator: (provided) => ({ ...provided, display: "none" }),
  placeholder: (provided) => ({ ...provided, color: "#000" }),
};



function ReactSelect({control , placeholder , name , options}) {
 
  return (
    <Controller
      control={control}
      defaultValue=""
      name={name}
      render={({field:{ onChange, value} }) => (
        <Select
          className="w-full text-right "
          styles={customStyles}
          options={options}
          placeholder={placeholder}
          value={options.find((c) => c.value === value)}
          onChange={(val) => onChange(val.value)}
        />
      )}
    />
  );
}

export default ReactSelect;
