import React from 'react';
import Navigation from './Component/Navbar/Navigation';
import Home from './Component/Home';
import About from './Component/Pages/About';
import Price from './Component/Pages/Price';
import Bussiness from './Component/Pages/Bussiness';
import Cart from './Component/Pages/Cart';
import Search from './Component/Pages/Search';

import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
     <Navigation />
     <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/price" element={<Price />} />
       <Route path="/Bussiness" element={<Bussiness />} />
       <Route path="/Cart" element={<Cart />} />
       <Route path="/Search" element={<Search />} />
     </Routes>
    </Router>




    </>
  )
}

export default App;