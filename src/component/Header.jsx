import {React,useContext} from 'react'
import { Link } from 'react-router-dom'
import { SlUser } from "react-icons/sl";
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';


export default function Header() {
  const {profile} = useContext(UserContext);
  const {cartItems} = useContext(CartContext);
  console.log(profile);
  
  return (
   <>
   

    <nav>
      <ul className='header grid'>
        <img src="/images/logo.png" alt=""  width='50px'/>
        <li><Link to="/home">home</Link></li>
        <div className="nav-item dropdown">
          
          <li className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><Link to="/products">Products</Link></li>
          
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
           
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </div>
        </div>
        
               
       
        <li className='grid right'><Link to="/cart">Cart</Link></li>
        
           {
        
            profile == 0 ? <li><Link to="/"><SlUser /></Link></li> :
            <Link to={`/user/${profile}`}><SlUser /></Link>            
           }
        
        {/* <li><Link to="/register"><SlUser /></Link></li> */}
      </ul>
     </nav>
   </>
  )
}
