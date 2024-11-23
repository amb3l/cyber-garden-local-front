import { TextField } from "@mui/material"
import { theme } from "../../mui_themes/MainTheme"

export const AuthPasswInput = ({ placeholder, value, onChangeHandler }) => {
  return (
    <TextField
      // error={ error.length ? true : false }
      // helperText={ error.length ? '' : error }
      value= { value }
      onChange= { onChangeHandler }
      placeholder= { placeholder }
      fullWidth
      sx={{
        backgroundColor: theme.palette.grey[100],
        borderRadius: '0.5rem',
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none"
          },
          "&:hover fieldset": {
            borderColor: "green", // Hovered border color
          },
          "&.Mui-focused fieldset": {
            border: "solid",
            borderColor: "black", // Focused border color
          },
        },
      }}
    />
  )
}