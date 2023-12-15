import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { auth } from "./firebase";

import "./App.css";
import Abouts from "./components/pages/Abouts";
import LogOut from "./components/LogOut/LogOut";
import SideBar from "./components/SideBar/SideBar";
import Contact from "./components/contact/Contact";


function App() {
  const [  userName ,setUserName ] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loginTime, setLoginTime] = useState(null);

  useEffect(()=>{

    const unsubscribe =  auth.onAuthStateChanged((user)=>{
      if (user) {
        setUserName(user.displayName);
        setUserEmail(user.email);

        setLoginTime(new Date());

      }
      else {setUserName("");
      setUserEmail("");
      setLoginTime(null);

    }  
      // console.log(user, userName);
    })

    return ()=>unsubscribe();
  } , []);


  return (


    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/LogOut" element={<LogOut />} />
          <Route path="/" element={<Home name={userName}/>} />
          <Route path="/Abouts" element={<Abouts name={userName} email={userEmail} loginTime={loginTime}/>} />
          <Route path="/SideBar" element={<SideBar name={userName}/>} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>


  );
}

export default App;
