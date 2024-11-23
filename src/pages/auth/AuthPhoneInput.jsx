import { Box, Typography } from '@mui/material'
import MuiPhoneNumber from 'mui-phone-number'
import { theme } from '../../mui_themes/MainTheme'


export const AuthPhoneInput = ({handleOnChange, value}) => {
  // const [value, setValue] = useState('')

  // const handleOnChange = (s: string) => {
  //   setValue(s)
  // }

  return (
    <MuiPhoneNumber 
      defaultCountry={'ru'} 
      onChange={(str) => handleOnChange(str) }
      value={ value }
      variant='outlined'
      disableDropdown
      placeholder="Телефон"
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
