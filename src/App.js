import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart from './components/Cart';
import Herosection from './components/Herosection';
import  Footer  from './components/Footer';
import {Route, Routes } from 'react-router-dom';
import Allproducts from './components/Allproducts';
import Contact from './components/Contact';
import About from './components/About';
import Productdetails from './components/Productdetails';

import { useState } from 'react';

function App() {
  
  return (
    <div >
      <Header/>

      <Contact/>
      <Productdetails/>
      <Routes>
  
      <Route path={'/'} element={<Herosection/>}  ></Route>
      <Route path={'/abt'} element={<About/>}  ></Route>
      <Route path={'/prod'} element={<Allproducts/>}  ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;