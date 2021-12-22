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

 const changName = (e)=>{
   setName(e.target.value);
 }

const changDes = (e)=>{
 setDescription(e.target.value)
}

const changImg = (e)=>{
   setImg(e.target.value)
}

const addVeget = async ()=>{
 const response = await axios.post("http://localhost:5000/veget",{
    newName: name , newDescription: description, newImg: img},
    {headers: {authorization: "Bearer " + token}}

)
    
  const copyAr = [...veget];
  copyAr.push(response.data)
  setVeget(copyAr);
  console.log(copyAr);
}

    return (
        <div>

     {veget.map((element) =>{

      return(

  <div>


 <h1>{element.name}</h1>
 <h2>{element.description}</h2>
 <img style={{width: "300px" , height: "300px" , "border-radius": "8px",}}
       src={element.img}/>
       
 <input onChange={(e)=>{changName(e)}} placeholder='name' />
 <input onChange={(e)=>{changDes(e)}}  placeholder='description'/>
 <input onChange={(e)=>{changImg(e)}} placeholder='img'/>
        <button onClick={()=>{addVeget()}} >add</button>
    </div>
              )
  })};
     </div>
    )
}
