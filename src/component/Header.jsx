import {React,useContext} from 'react'
import { Link } from 'react-router-dom'
import { SlUser } from "react-icons/sl";
import { UserContext } from '../context/UserContext';



export default function Header() {
  const {profile} = useContext(UserContext);
  
  return (
   <>
   

    <nav>
      <ul className='header grid'>
        <img src="/images/logo.png" alt=""  width='50px'/>
        <li><Link to="/home">home</Link></li>
        <div className="nav-item dropdown">
          
          <li className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><Link to="/products">Products</Link></li>
          
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/products/bouquet">bouquet</Link></li>
            <li><Link className="dropdown-item" to="/products/pop">pop</Link></li>
           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </div>
        </div>
        {profile == 1 ? <li><Link to="/addproduct">add</Link></li> : null}
        
        
               
       
        <li className='grid right'><Link to="/cart">Cart</Link></li>
        
           {      
            profile == 0 ? <li><Link to="/"><SlUser /></Link></li> :
            <Link to={`/user/${profile}`}><SlUser /></Link>            
           }
        
      </ul>
     </nav>
   </>
  )
}
