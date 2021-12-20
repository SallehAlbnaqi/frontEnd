import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function FoodDiabetics({token}) {
    const [FoodDiab, setFoodDiab] = useState([]);
    const [name, setName] = useState ("");
    const [description, setDescription] = useState("");
    const [img , setImg] = useState("");
  
    useEffect( async () => {
        console.log("ssss");
        const response = await axios.get("http://localhost:5000/FoDiab",{
            headers: {authorization: "Bearer " + token}
        });
        setFoodDiab(response.data);
      console.log(response.data);
    }, [])

    return (
        <div>
            
            {FoodDiab.map((element, index) =>{
               return (

                <div>
                    <h1>{element.name}</h1>
                    <h2>{element.description}</h2>
             <img style={{width: "300px" , height: "300px" , "border-radius": "8px",}}
                     src={element.img}/>
                </div>
               )
                
               
            })}
        </div>
    )
}
