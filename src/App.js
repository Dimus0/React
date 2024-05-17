import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Search from "./pages/Search"
import SignUP from "./pages/SignUp"
import UserProfile from './assets/UserProfile/UserProfile';
import { AuthProvider } from './assets/Login/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/search' element={<Search />} />
            <Route path='/login' element={<SignUP />} />
            <Route path='/user-profile' element={<UserProfile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
