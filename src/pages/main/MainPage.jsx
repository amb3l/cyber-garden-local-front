import { Typography } from "@mui/material"
import { MainHeader } from "../../shared/headers/MainHeader"

export const MainPage = () => {
  return (
    <div className="page-bg">
      <MainHeader/>
      <div>
        <Typography>Sample text</Typography>
      </div>
    </div>
  )
}