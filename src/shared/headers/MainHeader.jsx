import { AppBar, Box, Toolbar, Typography, Button, List } from '@mui/material'
import AppLogo from '../../logo.svg'
import { theme } from '../../mui_themes/MainTheme'
import PersonIcon from '@mui/icons-material/Person'


export const MainHeader = () => {
  return (
    <AppBar position="sticky" 
      sx={{ 
        left: 0, 
        right: 0, 
        top: 0, 
        backgroundColor: 'white'
      }}>
      <Toolbar className='toolbar-margin' sx={{
        display: 'flex',
        flexDirection: 'row', 
        flexWrap: 'nowrap',
        alignContent: 'normal',
        justifyContent: 'normal',
        alignItems: 'center'
      }}>
        {/* Content */}
        {/* <Typography color='black' variant='h5'>Logo</Typography> */}

        <img src={AppLogo} alt="App Logo" height={38}
          className='cursor-pointer'
        />

        <NavigationList/>

        <ProfileBlock/>
      </Toolbar>
    </AppBar>
  )
}

const NavigationList = () => {
  return (
    <List sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'nowrap',
        alignContent: 'normal',
        justifyContent: 'normal', 
        alignItems: 'normal',
        marginLeft: 4
      }}
    >
      <NavigationItem text={'Транзакции'}/>

      <NavigationItem text={'Отчёты'}/>

      <NavigationItem text={'Калькулятор процентов'}/>
    </List>
  )
}

const NavigationItem = ({text}) => {
  return (
    <Button 
        // onClick={() => navigate('/services')}
        variant='text'
        sx={[
          { borderRadius: 2, color: '#536470', textTransform: 'none',
            px: 1, py: 0.5
           },
          (theme) => ({
            '&:hover': {
              color: 'black'
            },
          }),
        ]}
      > 
        {text}
      </Button>
  )
}

const ProfileBlock = () => {
  return (
    <Button 
      // onClick={() => navigate('/services')}
      variant='text'
      sx={[
        { borderRadius: 2, color: theme.palette.info, textTransform: 'none',
          padding: 1, marginLeft: 'auto'
          },
        (theme) => ({
          '&:hover': {
            // color: 'black'
          },
        }),
      ]}
    > 
      <Box sx={{ display: 'flex' }}>
        <Typography variant='medium'>
          Личный кабинет
        </Typography>
        <PersonIcon sx={{ pl: 1 }}/>
      </Box>
    </Button>
  )
}