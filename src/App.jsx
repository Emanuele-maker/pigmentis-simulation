import "./App.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Animation from "./components/Animation/Animation"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Animation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App