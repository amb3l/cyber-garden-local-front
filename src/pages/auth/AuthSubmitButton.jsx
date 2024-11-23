import { Button, Box } from "@mui/material"
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { theme } from "../../mui_themes/MainTheme"

export const AuthSubmitButton = ({ onClickHandler }) => {
  return (
    <Box>
      <Button
        onClick= { onClickHandler }
        fullWidth
        variant='contained'
        sx={[
          { 
            borderRadius: '0.5rem',
            textTransform: 'none',
            height: '56px',
            width: '56px', 
            boxShadow: 'none',
            ml: '0.5rem',
            backgroundColor: '#FFDD2D',
            color: "black",
            padding: 0
          }
        ]}
      >
        <ArrowForwardIosRoundedIcon/>
      </Button>
    </Box>
  )
}