import TodoPg from "../../pages/TodoPg/TodoPg"
import MobilePg from "../../pages/MobilePg/MobilePg"
import MobileAddTodo from "../../pages/MobilePg/MobileAddTodo"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPg />} />
      <Route path="/home" element={<MobilePg />} />
      <Route path="/addtodo" element={<MobileAddTodo />} />
    </Routes>
  )
}

export default App
