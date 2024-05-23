import { createTheme, ThemeProvider } from "@mui/material"
import BottomNav from "../../MobileComponents/BottomNav/BottomNav"
import MenuAppBar from "../../MobileComponents/AppBar/MenuAppBar"
import MobileDisplay from "./MobileDisplay"

const MobilePg = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <MobileDisplay />
      <BottomNav />
    </ThemeProvider>
  )
}

export default MobilePg
