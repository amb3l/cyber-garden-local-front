import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { IconButton, TextField } from '@mui/material';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { theme } from '../../../mui_themes/MainTheme';

export default function BalanceEditPopper({
  anchorEl, open, balanceValue, handleSubmit, handleCancel}) {

  const [newValue, setNewValue] = useState()

  const handleChangeValue = (e) => {
    setNewValue(e.target.value)
  }
  
  React.useEffect(() => {
    setNewValue(balanceValue)
  }, [])

  return (
    <Popper
      // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
      sx={{ zIndex: 1200 }}
      open={open}
      anchorEl={anchorEl}
      // placement={placement}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={120}>
          <Paper>
            <Box display={'flex'} flexDirection={'row'} padding={'0.5rem'}>
              <TextField 
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
                value={newValue} 
                variant='outlined' 
                size='small'
                onChange={handleChangeValue}
              />

              <IconButton onClick={handleSubmit(newValue)}>
                <DoneRoundedIcon/>
              </IconButton>
              <IconButton onClick={handleCancel}>
                <HighlightOffRoundedIcon/>
              </IconButton>
            </Box>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}