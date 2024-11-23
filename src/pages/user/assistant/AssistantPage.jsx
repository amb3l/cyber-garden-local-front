import { Button, Paper, TextField, Typography } from "@mui/material"
import { MainHeader } from "../../../shared/headers/MainHeader"
import { PageContentWrapper } from "../../PageContentWrapper"
import Grid2 from '@mui/material/Grid2'
import Box from '@mui/material/Box'
import { useState } from "react"
import CurrencyRubleRoundedIcon from '@mui/icons-material/CurrencyRubleRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import { theme } from "../../../mui_themes/MainTheme"
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { AssistantTable } from "./AssistantTable"

export const AssistantPage = () => {
  return (
    <div>
      <MainHeader/>
      <PageContentWrapper>
        <Box sx={{display: 'flex', flexDirection: 'row', mt: 2}}>
          
          <TransactionsMenu/>

          <Box sx={{ flexGrow: 1, mt: 8}}>
            <AssistantTable/>
          </Box>
        </Box>
      </PageContentWrapper>
    </div>
  )
}

const ListGridItem = ({children}) => {
  return (
    <Grid2>
      <Paper sx={{ px: 2, py: 1 }}>
        {children}
      </Paper>
    </Grid2>
  )
}

const TransactionsMenu = ({children}) => {
  const [balanceValue, setBalanceValue] = useState('10000.55')
  const [incomeValue, setIncomeValue] = useState('20202.123')
  const [outcomeValue, setOutcomeValue] = useState('202.123')
  const [showBalance, setShowBalance] = useState(true)

  const handleToggle = () => {
    setShowBalance((prev) => !prev)
  }
  
  return (
    <Grid2 container spacing={2} direction={'column'} sx={{padding: 2}} width={'400px'}>
      <Grid2 sx={{ pl: 2 }}>
        <Typography variant="h5" fontWeight={600}>
          Журнал транзакций
        </Typography>
      </Grid2>

      {/* Balance */}
      <ListGridItem>
        <Typography sx={{mb: '1rem'}} fontWeight={600}>
          Баланс
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant="h4" fontWeight={600}>
              {(showBalance ? balanceValue : '*****') + ' ₽'}
            </Typography>
          </Box>
          <Button
            onClick={handleToggle}
            sx={{
              borderRadius: '50%',
              minWidth: 'auto',
              backgroundColor: theme.palette.grey[300],
              color: theme.palette.grey.A700,
              background: 'none'
            }}
          >
            <VisibilityOffRoundedIcon/>
          </Button>
        </Box>
      </ListGridItem>
      
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
        }}
      >
        <Box sx={{ width: '175px'}}>
          <ListGridItem>
            <Typography sx={{mb: '1rem'}} fontWeight={600}>
              Доходы месяца
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="h6" fontWeight={600}>
                {(showBalance ? incomeValue : '***') + ' ₽'}
                </Typography>
              </Box>
            </Box>
          </ListGridItem>
        </Box>
        
        <Box sx={{ width: '175px' }}>
          <ListGridItem>
            <Typography sx={{mb: '1rem'}} fontWeight={600}>
              Расходы месяца
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography variant="h6" fontWeight={600}>
                {(showBalance ? outcomeValue : '***') + ' ₽'}
                </Typography>
              </Box>
            </Box>
          </ListGridItem>
        </Box>
      </Box>

      <ListGridItem>
        <Button
          fullWidth
          variant="text"
          // onClick={() => navigate('/services')}
          sx={[
            { 
              borderRadius: 2, color: 'black', textTransform: 'none'
            }
          ]}
        >
          <Typography>
            Добавить операцию
          </Typography>
        </Button>
      </ListGridItem>
      
      <ListGridItem>
        <Button
          fullWidth
          variant="text"
          // onClick={() => navigate('/services')}
          sx={[
            { 
              borderRadius: 2, color: 'black', textTransform: 'none'
            }
          ]}
        >
          <Typography>
            Добавить плановую операцию
          </Typography>
        </Button>
      </ListGridItem>
      
    </Grid2>
  )
}