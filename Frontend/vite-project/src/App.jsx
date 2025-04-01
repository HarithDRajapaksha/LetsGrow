import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landingpage from './Pages/Landing Page/LandingPage';
import OurTeam from './Components/OurTeam/OurTeam';
import StartupProfile from './Pages/User Profile Page/Startup/StartupProfile';
import StartupDashboard from './Pages/Dashbord/Startup/StartupDashboard';

function App() {
  return (
    <div className="App">
<<<<<<< Updated upstream
      hello
=======
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/ourteam" element={<OurTeam/>}/>
        <Route path="/startup-dashboard" element={<StartupDashboard/>}/>
        <Route path="/startup-profile" element={<StartupProfile/>}/>
      </Routes>
      </BrowserRouter>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
