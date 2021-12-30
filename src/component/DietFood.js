import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { useHistory ,useParams } from "react-router-dom";


export default function DietFood({token}) {
  const[Diet, setDiet] = useState(""); 
  const {id} = useParams();
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
            
      <h1>{Diet.name}</h1>
      <h2>{Diet.description}</h2>
      <img onClick={()=>{goFodDiet(Diet._id)}} style={{width: "300px" , height: "300px" , "border-radius": "8px",}}
         src={Diet.img}/>
        </div>
    )
}
