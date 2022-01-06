import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import "./FoodDiabed.css"


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
        <div className='FoodDiabed'>
        <h1 className='NameDiadbed' style={{color:"white"}}>{FoodDiabetics.name}</h1>
        <h1>{FoodDiabetics.data}</h1>
        <img src={FoodDiabetics.img} style={{width: "300px" , height: "300px" , "border-radius": "8px",}}  />
        <iframe src={FoodDiabetics.video} className="imgFodDiab" frameborder="0"></iframe>
        <h1 className='discrFood' style={{color:"white"}}>{FoodDiabetics.description}</h1>


    </div>:""}
        </>
    )
}

