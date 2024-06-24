import { ThemeProvider } from "@mui/material"
import { theme } from "../theme"
import BottomNav from "../components/BottomNav/BottomNav"
import MenuAppBar from "../components/MenuAppBar/MenuAppBar"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuAppBar />
      <BottomNav />
    </ThemeProvider>
  )
}

export default App
