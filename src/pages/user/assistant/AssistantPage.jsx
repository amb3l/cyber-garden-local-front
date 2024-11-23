import { TextField, Typography } from "@mui/material"
import { MainHeader } from "../../../shared/headers/MainHeader"
import { PageContentWrapper } from "../../PageContentWrapper"
import Grid from '@mui/material/Grid2'
import Box from '@mui/material/Box'

export const AssistantPage = () => {
  return (
    <div>
      <MainHeader/>
      <PageContentWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 8 }}>
              <Item>xs=6 md=8</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Item>xs=6 md=4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
              <Item>xs=6 md=8</Item>
            </Grid>
          </Grid>
        </Box>
        

      </PageContentWrapper>
    </div>
  )
}