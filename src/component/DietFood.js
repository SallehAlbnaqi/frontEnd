import React, { useState , useEffect } from 'react'
import axios from 'axios';
import { useHistory ,useParams } from "react-router-dom";
import "./DietFood.css"

export default function DietFood({token}) {
  const[Diet, setDiet] = useState(""); 
  // const [video, setVideo] = useState("");
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
    // let myid ="snpEQPgFlkU"

    return (

        
        <div className='DietFoood'>
        {Diet && <><h1 className='NameDiet' style={{color:"white"}}>{Diet.name}</h1>
        <img  style={{width: "300px" , height: "300px" , "border-radius": "8px", }}
           src={Diet.img}/></>} 
           {/* <iframe className='imgDiett'
        
        // src={`https://www.youtube.com/embed/${myid}`}
        src={Diet.video}
      ></iframe> */}
      <iframe src={Diet.video} className="imgDiett" frameborder="0"></iframe>
        <h2 className='NameDietFood' style={{color:"white"}} >{Diet.description}</h2>

        </div>
    )
}
// 