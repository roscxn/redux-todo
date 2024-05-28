import TodoPg from "../../pages/TodoPg/TodoPg"
import MobilePg from "../../pages/MobilePg/MobilePg"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoPg />} />
      <Route path="/home" element={<MobilePg />} />
    </Routes>
  )
}

export default App
