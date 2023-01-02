import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
     <Register/>
      <BrowserRouter>
      <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
