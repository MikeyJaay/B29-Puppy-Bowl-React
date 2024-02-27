import { Route, Routes } from "react-router-dom";
import AllPlayers from "./components/SinglePlayer"

function App() {
  
  return (
    <>

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayers />} />
      </Routes>
    </>
  );
}

export default App;
