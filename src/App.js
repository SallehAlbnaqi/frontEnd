import React, { useState } from 'react';
import Login from "./component/Login";
import SignUp from './component/SignUp';
import Navbar from "./component/Navbar";
import { Route } from "react-router-dom"
import "./App.css"

export default function App() {
  const [ token, setToken ] = useState("");
  return (
    <div>
      <Navbar token ={token} setToken ={setToken}/>
      <Route exact path="/Login" render ={()=>{
        return <Login setToken={setToken}/>
      }}/>
      <Route exact path="/SignUp" component={SignUp} />
    </div>
  )
}

