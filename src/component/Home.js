import React,{useState,useEffect} from 'react'
import axios from 'axios'
// import { AiFillLike } from 'react-icons'

export default function Home({token}) {
    // مررنا التوكن ك بروبز عشان نستخدمة
    const [ food, setFood] = useState([]);
    const [ name , setName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ img, setImg ] = useState("");
    // const [searchAr, setsearchAr] = useState("");
    useEffect( async() => {
        const result = await axios.get("http://localhost:5000/Food",{
         headers:{ authorization : "Bearer " + token},
        });
        console.log(result.data);
        setFood(result.data);
        // ^ باليوس افكت نستقبل البيانات من الباك اند
    },[] )
  
    const changeName =(e)=>{
     setName(e.target.value)
    }

    const changeDisc = (e)=>{
     setDescription(e.target.value)
    }

    const changeImg = (e)=>{
        setImg(e.target.value)
    }

    const addFood =async ()=>{
       const respons = await axios.post("http://localhost:5000/Food",
       {name, description,img },
       {headers: { authorization: "Bearer "+ token}}
       )
       const copyArr = [...food]
       copyArr.push(respons.data);
       setFood (copyArr);
       
    }

    const deletFood = async(id,index)=>{
        const deletFood = await axios.delete(`http://localhost:5000/Food/${id}`,{
            headers:{authorization:"Bearer " + token},
        })
            const copyArr = [...food];
            copyArr.splice(index,1);
            setFood(copyArr);
            console.log(copyArr);
        
    }

    // const searchTarg = (e)=>{
    //     setsearchAr(e.target.value)
    // }
    // const searArr = ()=> {
    //     const response = food.filter((element) => {
    //         if (element.name.toLowerCase().includes(searchAr.toLocaleLowerCase())){
    //             return element;
    //         }
    //     });
    //     setsearchAr(response);

    // }


    return (
        <div>
            <input onChange={(e)=>{changeName(e)}} placeholder='name'/>
            <input onChange={(e)=>{changeDisc(e)}} placeholder='discription' />
            <input onChange={(e)=>{changeImg(e)}} placeholder='img' />
            <button onClick={()=>{addFood()}}> add food </button>
            {/* <button onClick={()=>{searArr()}}>search</button>
            <input onChange={(e)=>{searchTarg(e)}}placeholder='input'/> */}
            {food.map((element, index)=>{
                return(
                    <div className='Box'>
                <h1 > {element.name}</h1>
                <h2>{element.description}</h2>
                <img style={{width: "300px" , height: "300px" , "border-radius": "8px",}} src={element.img}/>
                <button onClick={()=>{deletFood(element._id,index)}}>remove</button>
                {/* ^ عن طريق الماب قمنا بعرض الصور والبيانات بالصفحة */}
            
                </div>
                
                )
            })} 
        </div>
    )
}

