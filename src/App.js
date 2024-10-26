import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Createacc from './Pages/Createacc';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routing import
import Footer from './Components/Footer';
import FooterInfo from './Components/FooterInfo';
import SignInSection from './Components/SignInSection';
import NavBar from './Components/NavBar';
import Verticalca from './Components/Verticalca';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Render header only for the home route */}
        <Routes>
          <Route path="/" element={<><Header/><NavBar/><Home /><Verticalca/><SignInSection/><FooterInfo/><Footer/></>} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/create-account" element={<Createacc />} /> {/* Create Account page without Header */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;