import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "@mui/material"
import { theme } from "../store/theme/theme"

import BottomNav from "../components/BottomNav/BottomNav"
import MenuAppBar from "../components/MenuAppBar/MenuAppBar"
import TodoPage from "../features/TodoPage/TodoPage"

function App() {
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
