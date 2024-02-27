import { Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from './components/SinglePlayer'
import NewPlayerForm from "./components/NewPlayerForm";
import NewPlayerForm from "./components/NewPlayerForm";

import './App.css'
import NavBar from './components/Navbar'

function App() {
  return (
    <>
      <NavBar />
      <main>
      <Routes>
          <Route path='/' element={<AllPlayers/>} />
          <Route path='/players/:id' element={<SinglePlayer />} />
                    {/* : colens mean anything */}
          <Route path='/NewPlayerForm' element={<NewPlayerForm />} />
      </Routes>
      </main>
    </>
  )
}

export default App