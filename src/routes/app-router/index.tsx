import { Route, Routes, Navigate } from "react-router-dom"
import TodosPage from "../../features/TodosPage/TodosPage"
import GoalsPage from "../../features/GoalsPage/GoalsPage"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TodosPage />} />
      <Route path="/goals" element={<GoalsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouter
