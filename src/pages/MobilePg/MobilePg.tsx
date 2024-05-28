import { createTheme, ThemeProvider } from "@mui/material"
import BottomNav from "../../mobileComponents/BottomNav/BottomNav"
import MenuAppBar from "../../mobileComponents/AppBar/MenuAppBar"
import MobileDisplay from "../MobileDisplay.tsx/MobileDisplay"
import AddTodoForm from "../../mobileComponents/AddTodoForm/AddTodoForm"

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
      <AddTodoForm />
      <MobileDisplay />
      <BottomNav />
    </ThemeProvider>
  )
}

export default MobilePg
