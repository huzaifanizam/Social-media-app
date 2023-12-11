import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { auth } from "./firebase";

import "./App.css";

function App() {
  const [  userName ,setUserName ] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if (user) {
        setUserName(user.displayName)
      }else setUserName("");
      console.log(user)
    })
  } , []);
  return (


    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home name={userName}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
