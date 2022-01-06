import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";
// import { useParams } from 'react-router-dom';

export default function Diet({token}) {
const [Diet , setDiet] = useState([]);
// const {id} = useParams();
const [name , setName] = useState("");
const [description , setDescription] = useState("");
const [img , setImg] = useState("");
const [video, setVideo] = useState("")
const [comment, setComment] = useState([]);
const history = useHistory();

 useEffect( async() => {
   console.log("saleeh");
const result = await axios.get("http://localhost:5000/Diet",{
   headers: {authorization : "Bearer " + token }
  });

    setDiet(result.data);
     console.log(result.data);

    }, []);


   const goFodDiet = (id)=>{
     history.push(`/DietFood/${id}`) 

    }

    const changInN = (e)=>{
     setName(e.target.value);

    }

    const changInDes = (e)=>{
     setDescription(e.target.value);

    }

    const changImg = (e)=>{
      setImg(e.target.value);

    }


  const changVid = (e)=> {
    setVideo(e.target.value)
  }


    const addDiet = async ()=>{
     const response = await axios.post("http://localhost:5000/Diet", {
       newName: name, newDescription:description, newImg: img, newVideo :video },

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
   <input onChange={(e)=>{changVid(e)}} placeholder='video' />
   <button onClick={()=>{addDiet()}}>add</button>

   {Diet.map((element, index)=>{
     return(
      <div className='h1' >
      <h1 className='h1' style={{color:"white"}}> {element.name}</h1>
      {/* <h2 className='h1' style={{color:"white"}}>{element.description}</h2> */}
      
      <img className='center' onClick={()=>{goFodDiet(element._id)}} style={{width: "380px" , height: "330px" , "border-radius": "8px",}}
         src={element.img}/>
      <button onClick={()=>{delDiet(element._id, index)}}>remove</button>
            
      </div>

      )})};

    </div>
    )
}



