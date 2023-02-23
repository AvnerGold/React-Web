import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import { UserContext } from '../context/UserContext';
import { BsXOctagonFill } from "react-icons/bs";
import '../styles/login.css'

export default function Login() {
  const [open, setOpen] = React.useState(true);
  const [oneProfile, SetOneProfile] = useState(0);
  const [IsAUser, setIsAUser] = React.useState(false);
  const {users,LoadId} = useContext(UserContext);

 

  function GoToProfile(mail,password){
    
    users.map((item) =>{
      if(item.email == mail && item.password == password){
        SetOneProfile(item.id);
        LoadId(item.id);
        setIsAUser(true);
        
      }
    })
   
  }
  
  const handleChange =(e) => {
    e.preventDefault();
    GoToProfile(e.target[0].value,e.target[1].value);
    if(oneProfile != null && oneProfile != 0){
      setOpen(!open);
      
    }
    

   } 

   useEffect(() => {
   
   },[IsAUser])

  return (
    <>

    {/* <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/register">register</Link></li>
        <li><Link to="/home">home</Link></li>
      </ul>
     </nav>
    <div>Login</div> */}

       

    {/* <form onSubmit={handleChange}>
     mail:  <input type="text" /> <br />
     password: <input type="number" /> <br />
     <button type='submit'>submit</button>
     
    </form> */}

    <div className="login-dark">
        <form method="post" onSubmit={handleChange}>
            <h2 className="sr-only">Login Form</h2>
            <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
            <div className="form-group"><input className="form-control" type="text" name="email" placeholder="Email"/></div>
            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password"/></div>
            
              <div className="form-group"><button className="btn btn-primary btn-block" type="submit">
              check
              </button>
                
              <button className="btn btn-primary btn-block" type="button">{IsAUser ? <Link to="/home">Log In</Link> : <span>incorrect <BsXOctagonFill/></span>}</button>
              </div>
            
           <Link to="/register">Dont have a account?</Link>
        </form>
    </div>

      {
        
      <div className={open ? "open" : null}>
        <Link to={`/user/${oneProfile}`}>open Profile</Link>

      </div> 
      }

   
   
    </>
  )
}
