import { Box, Typography } from '@mui/material'
import MuiPhoneNumber from 'mui-phone-number'


export const AuthPhoneInput = ({handleOnChange, value}) => {
  // const [value, setValue] = useState('')

  // const handleOnChange = (s: string) => {
  //   setValue(s)
  // }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: '0.5rem' }}>
      <Typography paddingLeft={'40px'} fontWeight={'500'} >Телефон</Typography>

      <MuiPhoneNumber 
        id='receiver-phone'
        defaultCountry={'ru'} 
        onChange={(str) => handleOnChange(str)}
        value={ value } 
        disableDropdown
        variant='outlined'
        placeholder="Телефон"
        InputProps={{ 
          sx: { 
            borderRadius: '16px',
            backgroundColor: '#efefee',
            py: '0.2rem',
          } 
        }}
        sx={{
          marginLeft: 'auto',
          width: '500px',
        }}
      />
    </Box>
  )
}
