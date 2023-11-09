import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import EngUserPageMainFrame from './components/EngUserMain';
import EngAudioPlayer from './components/EngAudioPlayer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/english" >
          <Route path="play/:location_id" element={<EngAudioPlayer />} />
        </Route>

        <Route path="/french" element={<></>} >
          <Route path="play/:location_id" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
