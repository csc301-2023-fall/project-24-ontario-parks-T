import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import EngUserPageMainFrame from './components/EngUserMain';
import EngAudioPlayer from './components/EngAudioPlayer';
import EngAudioPlaySeason from './components/EngAudioPlayerSeason';
import FrenchUserPageMainFrame  from './components/FrenchUserMain';
import FrenchAudioPlayer from './components/FrenchAudioPlayer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/english" >
          <Route path="play/:location_name" element={<EngAudioPlayer />} />
          <Route path="play/:location_name/:season" element={<EngAudioPlaySeason />} />
        </Route>

        <Route path="/french">
          <Route path="play/:location_name" element={<FrenchAudioPlayer/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
