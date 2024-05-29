import { Route, Routes } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material"

import BottomNav from "../components/BottomNav/BottomNav"
import MenuAppBar from "../components/MenuAppBar/MenuAppBar"
import TodoPage from "../pages/TodoPage/TodoPage"

function App() {
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
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
      <BottomNav />
    </ThemeProvider>
  )
}

export default App
