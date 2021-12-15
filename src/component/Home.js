import React,{useState,useEffect} from 'react'
import axios from 'axios'
// import { AiFillLike } from 'react-icons'

export default function Home({token}) {
    const [ food, setFood] = useState([])
    const [ name , setName ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ img, setImg ] = useState("")
    useEffect( async() => {
        const result = await axios.get("http://localhost:5000/Food",{
         headers:{ authorization : "Bearer " + token},
        });
        console.log(result.data);
        setFood(result.data);
        // ^ باليوس افكت نستقبل البيانات من الباك اند
    },[] )
  
    // const changeName =()=>{
    //     // 
    // }

    // const changeDisc = ()=>{

    // }

    // const changeImg = ()=>{

    // }

    // const addFood = ()=>}{

    // }

    return (

       
        <div>
            {food.map((element, i)=>{
                return(
                    <div className='Box'>
                <h1 > {element.name}</h1>
                <h2>{element.description}</h2>
                <img style={{width: "300px" , height: "300px" , "border-radius": "8px",}} src={element.img}/>
                
                {/* ^ عن طريق الماب قمنا بعرض الصور والبيانات بالصفحة */}
            {/* <input onChange={(e)=>{changeName(e)}} />
            <input onChange={(e)=>{changeDisc(e)}} />
            <input onChange={(e)=>{changeImg(e)}} />
            <button onClick={()=>{addFood()}}/> */}
                </div>
                )
            })} 
        </div>
    )
}

