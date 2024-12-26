import { TextField } from "@mui/material"

function TextInput( { name , label ,value , errors , register}) {
  return (
    <TextField
    id={`input-${name}`}
    label={label}
    variant="outlined"
    name={name}
    type="text"
    value={value}
    helperText={errors[name]?.message}
    {...register(name)}
    error={!!errors[name]}
  />
  )
}

export default TextInput