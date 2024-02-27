import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from './components/SinglePlayer'

import './App.css'
import NavBar from './components/Navbar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  )
}

export default App