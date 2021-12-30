import React, { useState, useEffect } from 'react';
import Home from './component/Home';
import Login from "./component/Login";
import SignUp from './component/SignUp';
import Diet from "./component/Diet";
import Navbar from "./component/Navbar";
import FoodDiabetics from './component/FoodDiabetics';
import VegetarianFoood from './component/VegetarianFoood';
import Profille from './component/Profille';
import Food from './component/Food'
import DietFood from './component/DietFood';
import VegetFood from './component/VegetFood'
import { Route } from "react-router-dom";
import "./App.css"


export default function App(){
const [token , setToken] = useState(()=>{
    
  const save = localStorage.getItem("token");
  const initVal = JSON.parse(save);
  return initVal || "";

  });

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
// ^ اذا سوينا تحديث للصفحة يصير التوكن سترينغ 
  }, [token])

  
  


  return (
    <div>
      <Navbar token ={token} setToken ={setToken}/>
      <Route exact path="/Home" render ={()=>{
        return <Home token={token}/>
      }}/>
       <Route exact path="/FoodDiabetics" render ={()=>{
        return <FoodDiabetics token={token}/>
      }}/>
       <Route exact path="/VegetarianFoood" render ={()=>{
        return <VegetarianFoood token={token}/>
      }}/>

      <Route exact path="/Food/:id" render ={()=>{
        return <Food token={token}/>
      }}/>

     <Route exact path="/DietFood/:id" render ={()=>{
        return <DietFood token={token}/>
      }}/>

     <Route exact path="/VegetFood/:id" render ={()=>{
        return <VegetFood token={token}/>
      }}/>
      
      <Route exact path="/Profille" render ={()=>{
        return <Profille token={token}/>
      }}/>
      
      <Route exact path="/Login" render ={()=>{
        return <Login setToken={setToken}/>
        // لازم نربط كل التشايلد بالاب عشان نقدر نشتغل عليهن
        // عن طريق الراوت
        
      }}/>

      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/Diet" render ={()=>{
        return <Diet setToken={setToken} token={token} />
        
      }}/>
      
    </div>
  )
}

