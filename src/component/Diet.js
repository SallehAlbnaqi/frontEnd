import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function Diet({token}) {
    const [Diet , setDiet] = useState([]);
    // const [name , setName] = useState("");
    // const [description , setdescription] = useState("");
    // const [img , setImg] = useState("");
    useEffect( async() => {
        console.log("saleeh");

      const result = await axios.get("http://localhost:5000/Diet",{
          headers: {authorization : "Bearer " + token }
        });
        setDiet(result.data);
       console.log(result.data);
    }, [])
    return (
        
        <div>
         {Diet.map((element,index)=>{
          return(
         <div >
                <h1 > {element.name}</h1>
                <h2>{element.description}</h2>
                <img style={{width: "300px" , height: "300px" , "border-radius": "8px",}} src={element.img}/>
         </div>
                )
            })}
        </div>
    )
}
