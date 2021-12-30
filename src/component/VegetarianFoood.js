import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function VegetarianFoood({token}) {
    const [Veget, setVeget] = useState([])
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const history = useHistory();


 useEffect( async() => {
    const response = await axios.get("http://localhost:5000/veget", {
     headers: {authorization: "Bearer " + token},
    });
    setVeget(response.data)
// console.log(response.data);
    }, [])


    const GoToVegetFood = (id) =>{
      history.push(`/VegetFood/${id}`);
  }

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
    {headers: {authorization: "Bearer " + token}},
)
    
  const copyAr = [...Veget];
  copyAr.push(response.data)
  setVeget(copyAr);
  console.log(copyAr);
}


const deleVeget =  async (id, index)=>{
 const delet = await axios.delete(`http://localhost:5000/veget/${id}`,{
     headers: {authorization: "Bearer " + token},
 });

 const copyArray = [...Veget];
 copyArray.splice(index,1);
 setVeget(copyArray);
 console.log(copyArray);
};

 return (
     
     <div>

 <input onChange={(e)=>{changName(e)}} placeholder='name' />
 <input onChange={(e)=>{changDes(e)}}  placeholder='description'/>
 <input onChange={(e)=>{changImg(e)}} placeholder='img'/>
 <button onClick={()=>{addVeget()}} >add</button>
 
   {Veget.map((element, index) =>{
         return(

  <div>

 <h1>{element.name}</h1>
 <h2>{element.description}</h2>
 <img onClick={()=>{GoToVegetFood(element._id)}}  style={{width: "300px" , height: "300px" , "border-radius": "8px",}}
       src={element.img}/>
    <button onClick={()=>{deleVeget(element._id, index)}}>remove</button>

    </div>
  )
  })};
     </div>
    )
}
