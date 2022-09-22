import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Signin from './Welcome/signin';
import SignUp from './Welcome/signup';
import LoggedIn from './Welcome/loggedin';
import {BrowserRouter as Router} from "react-router-dom"
import { Route, Routes} from "react-router";
function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/loggedin" element={<LoggedIn />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
