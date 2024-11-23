import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useCallback, useContext, useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ErrorIcon from '@mui/icons-material/Error';
import { theme } from '../../../mui_themes/MainTheme';
import { AuthWrapper } from '../AuthBoxWrapper';
import { AuthTextInput } from '../AuthTextInput';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { AuthSubmitButton } from '../AuthSubmitButton';


export const LogInPage = () => {
  const [error, setError] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  // const navigate = useNavigate()
  // const { login } = useContext(AuthContext)
  

  // const handleLogIn = async () => {
  //   try {
  //     setIsLoading(true)
  //     await login(emailValue, passwordValue)
  //     setIsLoading(false)
  //     navigate('/')
      
  //   } catch (e: unknown) {
  //     setIsLoading(false)
  //     const error = e as AxiosError
  //     setError(error.message)
  //     console.log(error)
  //   }
  // }

  const handleCloseClick = () => {
    console.log('Close')
  }

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value)
  }


  return (
    <Box>
      <AuthWrapper>
        <Box margin={6}>

          { isLoading ?
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 'inherit',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                position: 'fixed',
                backgroundColor: 'black',
                opacity: 0.5,
                zIndex: '1100'
              }}
            >
              <CircularProgress sx={{color: theme.palette.success.light}} />
            </Box>
            : null
          }

          <Button
            sx={{
              position: 'absolute',
              borderRadius: '50%',
              minWidth: '45px',
              minHeight: '45px',
              top: '2rem',
              right: '2rem',
              backgroundColor: theme.palette.grey[300],
              color: theme.palette.grey.A700
            }}
            onClick={handleCloseClick}
          >
            <CloseRoundedIcon/>
          </Button>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            my: '2rem' }}>
            <Typography variant='h5' fontWeight={600}>
              Войдите в аккаунт
            </Typography>
          </Box>

          {error.length ?
            <Box
              sx={{
                color: theme.palette.error.light,
                position: 'absolute',
                borderRadius: '40%',
                minWidth: 'auto',
                padding: '0.5rem',
                top: '1.7rem',
                right: '1rem'
              }}
            > 
              <ErrorIcon />
            </Box>
            : null
          } 

          <Box sx={{ mb: '1rem' }}>
            <AuthTextInput 
              placeholder= {'Телефон'} 
              value= {emailValue} 
              onChangeHandler= {handleEmailChange} 
            />
          </Box>

          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            
            <AuthTextInput
              placeholder= {'Пароль'} 
              value= {passwordValue}
              onChangeHandler= {handlePasswordChange} 
            />

            <AuthSubmitButton/>
          
          </Box>
        </Box>
      </AuthWrapper>
    </Box>
  )
}
