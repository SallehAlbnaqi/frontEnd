import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";


export default function Login ({ setToken }){
const [ email, setEmail] = useState("");
const [ password, setPassword ] = useState("");
const history = useHistory();
 const changeEml = (e)=>{
    setEmail(e.target.value)    
 }
 const changePas = (e)=> {
    setPassword(e.target.value)
 }
 const login = async ()=> {
     const result = await axios.post("http://localhost:5000/login",{
         email, password
     });
     setToken(result.data.token)
     history.push("/Home")
 } 


return (
    <div className="InputLog">

        
       <input onChange={(e)=> {changeEml(e)}} type="email" palceholder="email" />
       <input  onChange={(e)=> {changePas(e)}} type="password" palceholder="password" />
      <button className="submit" onClick={() =>{login()}} > login</button>
    </div>


)}
