import { TextField, Typography } from "@mui/material"
import { MainHeader } from "../../../shared/headers/MainHeader"
import { AuthWrapper } from "../../auth/AuthBoxWrapper"
import { PageContentWrapper } from "../../PageContentWrapper"

export const UserProfilePage = () => {
  return (
    <div>
      <MainHeader/>
      <PageContentWrapper>
        <Typography variant="h5">
          Ваши данные
        </Typography>
      </PageContentWrapper>
    </div>
  )
}