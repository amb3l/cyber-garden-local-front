import { BorderColor } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import zIndex from '@mui/material/styles/zIndex';

export const theme = createTheme({
  // palette: {
  //   type: 'light',
  //   primary: {
  //     main: '#FFDD2D',
  //   },
  //   secondary: {
  //     main: '#CA0000',
  //   },
  //   success: {
  //     main: '#1ABB40',
  //   },
  //   info: {
  //     main: '#126df7',
  //   },
  // },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Set your global font family here
    
    button: {
        textTransform: 'none', // Prevent uppercase transformation for buttons
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: '0px 0px 0px 0px',
        }
      }
    },
    MuiAutocomplete : {
      styleOverrides: {
        paper: {
          borderRadius: '1rem',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 -4px 6px -4px rgb(0 0 0 / 0.1)'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`& .MuiOutlinedInput-notchedOutline`]: {
            borderRadius: "0.5rem"
          }
        }
      }
    }
  }
}) 