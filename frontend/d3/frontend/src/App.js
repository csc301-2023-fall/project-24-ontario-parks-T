import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import UserPageMainFrame from './components/UserMain';
import AudioPlayer from './components/AudioPlayer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/components/Card/" element={<AudioPlayer />}/>
          <Route path="/play/:location_id" element={<AudioPlayer />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
