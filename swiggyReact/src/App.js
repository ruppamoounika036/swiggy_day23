import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
// import {  useLocation,} from 'react-router-dom';
import RegionAdmin from './regionAdmin/regionadmin';
import User from "./user/User";
// import Layout from "./navbar";
// import ContactUs from './email.js'
// import Category from './category';
// import SuperAdmin from './SuperAdmin/SuperAdmin';
import Signin from './Welcome/signin';
import SignUp from './Welcome/signup';
import LoggedIn from './Welcome/loggedin';
import ForgotPassword from "./Welcome/forgotPassword";
import SendOtp from "./Welcome/sendOtp";
import ResetPassword from "./Welcome/ResetPassword";
function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/loggedin" element={<LoggedIn />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/sendOtp/:id" element={<SendOtp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
        <Routes>
            <Route path="/RegionAdmin" element={<RegionAdmin />} />
        </Routes>
        <Routes>
            <Route path="/User" element={<User/>} />
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
