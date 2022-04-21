import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Donor from './Header/Donor';
import AboutUs from './Header/AboutUs';
import NonprofitSME from './Header/NonprofitSME';
import Home from './Header/Home';
import Header from './dummy/Header';
import Menuinfo from './dummy/Menuinfo';
import Signup from './Loginform.jsx/signup';
import Getup from './Loginform.jsx/getup';
import DonorId from './Loginform.jsx/DonorId';
import NonPSME from './Loginform.jsx/NonPSME';
import Compde from './Loginform.jsx/Compde';
import Page from './Loginform.jsx/page';
import Authfrom from '../src/gethelp/Authform';
import Gethelp from './Header/Gethelp';
import FollowUs from './gethelp/FollowUs';
import Us from './Profile.jsx/Us';
import Homescreen from '../src/Profile.jsx/Homescreen';
import Healthline from './Profile.jsx/Healthline';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Donor" element={<Donor/>}/>
      <Route path="NonprofitSME" element={<NonprofitSME/>}/>
      <Route path="AboutUs" element={<AboutUs/>}/>
      <Route path="Menuinfo" element={<Menuinfo/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="getup" element={<Getup/>}/>
      <Route path="DonorId" element={<DonorId/>}/>
      <Route path="NonPSME" element={<NonPSME/>}/>
      <Route path="Compde" element={<Compde/>}/>
      <Route path="page" element={<Page/>}/>
      <Route path="Authform" element={<Authfrom/>}/>
      <Route path="Gethelp" element={<Gethelp/>}/>
      <Route path="FollowUs" element={<FollowUs/>}/>
      <Route path="Us" element={<Us/>}/>
      <Route path="Homescreen" element={<Homescreen/>}/>
      <Route path="Healthline" element={<Healthline/>}/>
       
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
