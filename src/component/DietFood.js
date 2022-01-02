import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { useHistory ,useParams } from "react-router-dom";


export default function DietFood({token}) {
  const[Diet, setDiet] = useState(""); 
  const {id} = useParams();
  // ^ مررنا الايدي عشان اعرف الايدي تبع اليوزر 
 const history = useHistory();

useEffect( async() => {
   const response = await axios.get(`http://localhost:5000/getDiet/${id}`, {
       headers: {authorization: "Bearer " + token}
   })

   setDiet(response.data)
   console.log(response.data,"data");
}, [])

   const goFodDiet = (id)=>{
     history.push(`/DietFood/${id}`) 
    }
    return (
        
        <div>
        {Diet && <><h1 className='h1' style={{color:"white"}}>{Diet.name}</h1>
        <h2 className='h1' style={{color:"white"}} >{Diet.description}</h2>
        <img  style={{width: "300px" , height: "300px" , "border-radius": "8px", }}
           src={Diet.img}/></>}    
        </div>
    )
}