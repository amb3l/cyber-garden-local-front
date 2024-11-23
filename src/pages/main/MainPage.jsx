import { TextField, Typography } from "@mui/material"
import { MainHeader } from "../../shared/headers/MainHeader"
import { AuthWrapper } from "../auth/AuthBoxWrapper"

export const MainPage = () => {
  return (
    <div className="page-bg">
      <MainHeader/>
      {/* <AuthWrapper>
        <TextField/>
      </AuthWrapper> */}
    </div>
  )
}