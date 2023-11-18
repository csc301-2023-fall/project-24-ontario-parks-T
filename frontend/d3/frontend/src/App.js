import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import EngUserPageMainFrame from './components/EngUserMain';
import EngAudioPlayer from './components/EngAudioPlayer';
import EngAudioPlaySeason from './components/EngAudioPlayerSeason';
import FrenchUserPageMainFrame  from './components/FrenchUserMain';
import FrenchAudioPlayer from './components/FrenchAudioPlayer';
import FreAudioPlaySeason from './components/FreAudioPlayerSeason';
import AudioRepo from './components/AudioRepo';
import LocationRepo from './components/LocationRepo';
import AudioCreateForm from './components/AudioCreateForm';

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
          <Route path="play/:location_name/:season" element={<FreAudioPlaySeason />} />
        </Route>

        <Route path="/admin">
          <Route path="audios" element={<AudioRepo/>} />
          <Route path="audios/create" element={<AudioCreateForm/>} />
          <Route path="locations" element={<LocationRepo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
