import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function Diet({token}) {
const [Diet , setDiet] = useState([]);
const [name , setName] = useState("");
const [description , setDescription] = useState("");
const [img , setImg] = useState("");

 useEffect( async() => {
   console.log("saleeh");
const result = await axios.get("http://localhost:5000/Diet",{
   headers: {authorization : "Bearer " + token }
  });

    setDiet(result.data);
     console.log(result.data);
    }, [])

    const changInN = (e)=>{
     setName(e.target.value);
    }

    const changInDes = (e)=>{
      setDescription(e.target.value);
    }

    const changImg = (e)=>{
      setImg(e.target.value);
    }

    const addDiet = async ()=>{
     const response = await axios.post("http://localhost:5000/Diet", {
       newName: name, newDescription:description, newImg: img},

        { headers: {authorization: "Bearer " + token},
     })
     const copyDiet = [...Diet];
     copyDiet.push(response.data);
     setDiet(copyDiet)
     console.log(addDiet);
    }

    const delDiet = async (id,index)=>{
      const delet = await axios.delete(`http://localhost:5000/Diet/${id}`, {
       headers: {authorization: "Bearer " + token}
    });

    const copyDiet = [...Diet];
    copyDiet.splice(index,1);
    setDiet(copyDiet)
  
    }
    return (
        
 <div>
   <input onChange={(e)=>{changInN(e)}} placeholder='name'/>
   <input onChange={(e)=>{changInDes(e)}} placeholder='description' />
   <input onChange={(e)=>{changImg(e)}} placeholder='img'/>
   <button onClick={()=>{addDiet()}}>add</button>

   {Diet.map((element, index)=>{
     return(
      <div >
      <h1 > {element.name}</h1>
      <h2>{element.description}</h2>
      <img style={{width: "300px" , height: "300px" , "border-radius": "8px",}} 
         src={element.img}/>
      
      <button onClick={()=>{delDiet(element._id, index)}}>remove</button>
      </div>
         )})};

    </div>
    )
}
