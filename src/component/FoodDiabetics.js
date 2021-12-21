import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function FoodDiabetics({token}) {
    const [FoodDiab, setFoodDiab] = useState([]);
    const [name, setName] = useState ("");
    const [description, setDescription] = useState("");
    const [img , setImg] = useState("");
  
    useEffect( async () => {
        const response = await axios.get("http://localhost:5000/FoDiab",{
            headers: {authorization: "Bearer " + token}
        });
        setFoodDiab(response.data);
    //   console.log(response.data);
    }, [])

    const changeName = (e) =>{
        setName(e.target.value); 
    }

    const changeDisc = (e) =>{
        setDescription(e.target.value)
    }

    const changeImg = (e) =>{
        setImg(e.target.value)
    }

    const AddDiad = async ()=>{
     const response = await axios.post("http://localhost:5000/FoDiab", {
      name, description, img},
      { headers: {authorization: "Bearer " + token}})
        
    const copyed = [...FoodDiab];
    copyed.push(response.data)
    setFoodDiab(copyed)
  
    }

    const delDiad = async (id,index) =>{
      const deletDi = await axios.delete(`http://localhost:5000/FoDiab/${id}`, {
         headers: {authorization: "Bearer " + token},
      });
       const copyAr = [...FoodDiab];
       copyAr.splice(index,1);
       setFoodDiab(copyAr);
      
    }
    return (
      <div>
            
    {FoodDiab.map((element, index) =>{
        return (

          <div>
    <h1>{element.name}</h1>
    <h2>{element.description}</h2>
     <img style={{width: "300px" , height: "300px" , "border-radius": "8px",}}
         src={element.img}/>
     <input onChange={(e)=>{changeName(e)}} placeholder='name'/>
     <input onChange={(e)=>{changeDisc(e)}} placeholder='discription' />
     <input onChange={(e)=>{changeImg(e)}} placeholder='img' />
     <button onClick={()=>{AddDiad()}}> add food </button>
     <button onClick={()=>{delDiad(element._id,index)}}>remove</button>

                </div>
         )})}
        </div>  
    )
}
