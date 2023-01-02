import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
      <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
