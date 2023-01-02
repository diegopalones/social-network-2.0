import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import PostDetail from './components/PostDetail/PostDetail';
import Search from './components/Search/Search';
import Admin from './components/Admin/Admin';

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
          <Route path="/post/id/:_id" element={<PostDetail/>} />
          <Route path="/search/:postName" element={<Search />} />
          <Route path="/admin" element={<Admin />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
