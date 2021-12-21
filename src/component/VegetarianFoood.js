import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function VegetarianFoood({token}) {
    const [veget, setVeget] = useState([])
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
 useEffect( async() => {
    const response = await axios.get("http://localhost:5000/veget", {
        headers: {authorization: "Bearer " + token},
    });
    setVeget(response.data)
// console.log(response.data);
    }, [])
    
    return (
        <div>
     {veget.map((element) =>{

      return(

  <div>

    <h1>{element.name}</h1>
    <h2>{element.description}</h2>
    <img style={{width: "300px" , height: "300px" , "border-radius": "8px",}}
       src={element.img}/>

    </div>
              )
          })};
        </div>
    )
}
