import { AppBar, Box, Toolbar, Typography, Button, List } from '@mui/material'
import './MainHeader.css'


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
        <Typography color='black' variant='h5'>Logo</Typography>

        <NavigationContent/>

        <ProfileBlock/>
      </Toolbar>
    </AppBar>
  )
}

const NavigationContent = () => {
  return (
    // <Box sx={{ 
    //   display: 'flex', 
    //   flexDirection: 'row', 
    //   flexWrap: 'nowrap',
    //   alignContent: 'normal',
    //   justifyContent: 'normal', 
    //   alignItems: 'normal',
    //   marginLeft: 4
    //   }}>
      
    //   <NavigationButton text={'Транзакции'}/>

    //   <NavigationButton text={'Отчёты'}/>

    //   <NavigationButton text={'Калькулятор процентов'}/>
    // </Box>

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
      <NavigationButton text={'Транзакции'}/>

      <NavigationButton text={'Отчёты'}/>

      <NavigationButton text={'Калькулятор процентов'}/>
    </List>
  )
}

const NavigationButton = ({text}) => {
  return (
    <Button 
        // onClick={() => navigate('/services')}
        variant='text'
        sx={[
          { borderRadius: 2, color: '#94949c', textTransform: 'none',
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
        { borderRadius: 2, color: 'blue', textTransform: 'none',
          padding: 1, marginLeft: 'auto'
          },
        (theme) => ({
          '&:hover': {
            // color: 'black'
          },
        }),
      ]}
    > 
      <Box>
        <Typography>
          Личный кабинет
        </Typography>
      </Box>
    </Button>
  )
}