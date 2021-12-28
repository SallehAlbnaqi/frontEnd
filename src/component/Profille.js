import React, {useState, useEffect} from 'react'
import axios from 'axios';


export default function Profille({token}) {
 const [user, setUser] = useState("");
 const [name, setName] = useState("");
 const [pass, setPass] = useState("");
 const [img, setImg] = useState("");  

 useEffect( async () => {
   const respones = await axios.get("http://localhost:5000/user", {
     headers: {authorization: "Bearer " + token}
   });

   setUser(respones.data);
   
 }, [])

  const changeName = (e)=>{
    setName(e.target.value);

  }

  const changePass = (e)=>{
    setPass(e.target.value)
  }

  //  const changeImg = (e)=>{
  //    setImg(e.target.value)
  //  }

    return (
     <div>
    <img style={{width: "250px" , height: "250px" , "border-radius": "8px",}} src={user.img}/> 
    {/* <input onChange={(e)=>{changeImg(e)}} placeholder='img' /> */}
   {user.name}
   <input onChange={(e)=>{changeName(e)}} placeholder='name' />
   {user.pass}
   <input onChange={(e)=>{changePass(e)}} placeholder='pass' />


     </div>
    )
}
