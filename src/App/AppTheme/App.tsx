import Page1 from "../../pages/MobilePg/MobilePg"
import MobilePg from "../../pages/MobilePg/MobilePg"
import { Route, Routes } from "react-router-dom" // Import BrowserRouter and Route

function App() {
  return (
    <Routes>
      <Route path="/" element={<MobilePg />} />
      <Route path="/home" element={<Page1 />} />
    </Routes>
  )
}

export default App
