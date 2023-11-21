import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

import EngUserPageMainFrame from './components/EngUserMain';
import EngAudioPlayer from './components/EngAudioPlayer';
import EngAudioPlaySeason from './components/EngAudioPlayerSeason';
import FrenchUserPageMainFrame  from './components/FrenchUserMain';
import FrenchAudioPlayer from './components/FrenchAudioPlayer';
import FreAudioPlaySeason from './components/FreAudioPlayerSeason';
import AudioRepo from './components/AudioRepo';
import LocationRepo from './components/LocationRepo';
import AudioCreateForm from './components/AudioCreateForm';
import AudioEditForm from './components/AudioEditForm';
import CreateLocation from './components/LocationCreateForm';
import LocationCreationForm from './components/LocationCreateForm';
import AdminLoginPage from './components/AdminLoginPage';
import LocationEditForm from './components/LocationEditForm';
import LogoutPage from "./components/Logout";
import AdminRegisterPage from "./components/AdminRegisterPage";

function App() {
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const data = {
          refresh: localStorage.getItem('refresh'),
        };
        const response = await axios.post('http://localhost:8000/AdminControl/api/token/refresh/', data);

        localStorage.setItem('token', response.data.access);

        console.log('token refreshed')
      } catch (error) {
        console.error(error);
        console.log('token refresh failed')
        // Handle token refresh failure, e.g. redirect to login page
      }
    }, 1 * 60 * 1000);
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

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
          <Route path="register" element={<AdminRegisterPage/>} />
          <Route path="login" element={<AdminLoginPage/>} />
          <Route path="audios" element={<AudioRepo/>} />
          <Route path="audios/create" element={<AudioCreateForm/>} />
          <Route path="audios/edit/:audio_name" element={<AudioEditForm/>} />
          <Route path="locations" element={<LocationRepo/>} />
          <Route path="locations/create" element={<LocationCreationForm/>} />
          <Route path="locations/edit/:location_name" element={<LocationEditForm/>} />
          <Route path="logout" element={<LogoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
