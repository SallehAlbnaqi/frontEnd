import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


export default function Navbar ({ token, setToken}){
    return (
    <div>
      {(token) ? (
    //  <ul className="liToken">
    //    <li>
    //      <Link className="link" to="/" onClick={()=>{setToken("")}}>log out</Link>
    //    </li>

    //    <li>
    //      <Link className="link" onClick={() => { setToken("/Home")}}to="/login"></Link>
    //    </li> 

    //     <li>
    //      <Link className="link" to="/Home" > Home</Link>
    //     </li>

        
    //     <li>
    //       <Link className="link" to="/vegetarianFood">vegetarianFood</Link>
    //     </li>

    //      <li>
    //      <Link className="link" to="/meatMeals">meatMeals</Link>   
    //      </li>
          
    //      <li>
    //      <Link className="link" to="/FoodDiabetics">FoodDiabetics</Link>   
    //      </li>
    //  </ul>
<ul className="ul1">
    
            <li className="w3-button w3-inline w3-light white" id="ccvv"><Link id="ccvv" className="homelink" to="/Home">Home </Link></li>
            <li className="w3-button w3-inline w3-light white" id="NavbarTitle"><Link  to="/vegetarianFood">vegetarianFood</Link></li>
            <li className="w3-button w3-inline w3-light white" id="NavbarTitle"><Link  to="/meatMeals">meatMeals</Link></li>
            <li className="w3-button w3-inline w3-light white" id="NavbarTitle"><Link  to="/FoodDiabetics">FoodDiabetics</Link></li>
            
            <li className="w3-button w3-inline w3-light white" id="NavbarTitle"><Link  to="/ logout" onClick={()=>{setToken("")  
             }}>log out</Link></li>

            </ul>
      ) : (
      <div>
   <ul>
    
     <li className="w3-button w3-right w3-black" id="NavbarTitle" > <Link  to="/login">login</Link></li>
     <li className="w3-button w3-right w3-black" id="NavbarTitle" > <Link  to="/signUp">signUp</Link></li>
            </ul>

    
    </div>

      )
    }


    </div>
    )
}