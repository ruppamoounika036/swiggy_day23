import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
// import {  useLocation,} from 'react-router-dom';
import RegionAdmin from './regionAdmin/regionadmin';
import User from "./user/User";
import Layout from "./navbar";
import ContactUs from './email.js'
import Category from './category';
import SuperAdmin from './SuperAdmin/SuperAdmin';
function App() {

return(
  <>
  {/* <div> */}
  {/* <h1>cfvgbjhnj</h1> */}
  {/* <Category/> */}
  <SuperAdmin />
  {/* </div> */}
 
  <BrowserRouter>
     <Layout/>
        <Routes>
            <Route path="/RegionAdmin" element={<RegionAdmin />} />
        </Routes>
        <Routes>
            <Route path="/User" element={<User/>} />
        </Routes>
      </BrowserRouter>

  </>
);
 
}

export default App;
