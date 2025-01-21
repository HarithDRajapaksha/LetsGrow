import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landingpage from './Pages/Landing page/Landingpage';
import OurTeam from './Components/our team/OurTeam';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/team" element={<OurTeam/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
