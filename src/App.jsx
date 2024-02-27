import { Routes, Route, Link } from "react-router-dom";
import SinglePlayer from "./components/SinglePlayer"
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm"
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
    <h1> Test </h1>
      <div id='container'>
          <div id="navbar">
            <Link to='/'>Home</Link>
          </div>
      </div>


      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </>


  );
}

export default App;
