import { Routes, Route, HashRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import './App.css'
import Booking from './pages/booking';
import OurTeam from './pages/ourteam';
import OurServices from './pages/ourservices';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
        <Route exact path="/our_services" element={<OurServices />} />
          <Route exact path="/our_team" element={<OurTeam />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
