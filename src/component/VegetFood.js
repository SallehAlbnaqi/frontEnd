import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory ,useParams } from "react-router-dom";


export default function VegetFood({token}) {
const [Veget, setVeget] = useState("");
const { id } = useParams();
const history = useHistory();

useEffect( async () => {
  const response = await axios.get(`http://localhost:5000/vegetFood/${id}`, {
      headers: {authorization: "Bearer " + token }
  });

  setVeget(response.data)
  console.log(response.data);

}, [])

const goToVegetFood = (id)=>{

    history.push(`/DietFood/${id}`) 

   }

return (
    
    <div>

      <h1 className='h1' style={{color:"white"}}>{Veget.name}</h1>
      <h2 className='h1' style={{color:"white"}}>{Veget.description}</h2>
      <img className='imgVeget' style={{width: "300px" , height: "300px" , "border-radius": "8px",}}
         src={Veget.img}/>
            
    </div>
    )
}
