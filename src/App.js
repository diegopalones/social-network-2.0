import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
