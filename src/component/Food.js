import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Food({token}) {
const [FoodDiabetics, setFoodDiabetics] = useState (null);
const { id } = useParams();
console.log(useParams());
useEffect( async () => {
    console.log(token,"token");
    console.log(id ,id);
  const res = await axios.get(`http://localhost:5000/get-food/${id}`,{
      headers: {authorization: "Bearer " + token}
  });
  setFoodDiabetics(res.data);
  console.log(res.data);
}, [])

 
    return (
        <>
        {FoodDiabetics !==null ? 
        <div className='Food'>
        <h1>{FoodDiabetics.name}</h1>
        <h1>{FoodDiabetics.description}</h1>
        <h1>{FoodDiabetics.data}</h1>
        <img src={FoodDiabetics.img} style={{width: "300px" , height: "300px" , "border-radius": "8px",}}  />

    </div>:""}
        </>
    )
}
