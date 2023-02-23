import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import User from '../component/User';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';


export default function Register() {
const {users} = useContext(UserContext);
const {SetUsers} = useContext(UserContext);
//console.log(users);

function AddUser(id,name,familyName,email,password){
  find = users.some(item => item.id === id)
  if(!find){
    
    let item = {
      id,
      name,
      familyName,
      email,
      password
    }
    SetUsers((prev) => [...prev,item]);
    console.log(users);
  }
  else{
    alert("CANT USE THE SAME IDDDDDD");
  }
 }
 

 const handleChange =(e) => {
  e.preventDefault();
  AddUser(parseInt(e.target[0].value),e.target[1].value,e.target[2].value,e.target[3].value,e.target[4].value);
 } 
 
  return (
    <>
     <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/register">register</Link></li>
        <li><Link to="/home">home</Link></li>
      </ul>
     </nav>
    
    <div>Register</div>

    <form onSubmit={handleChange}>
      Enter id: <input type="number" placeholder='id' /> <br />
      Enter name: <input type="text" placeholder='name'  /><br />
      Enter familyName: <input type="text" placeholder='familyName'  /><br />
      Enter Email: <input type="text" placeholder='Email'  /><br />
      Enter password: <input type="number" placeholder='password'  /><br />
      <input type="submit" />
    </form>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {users.map((item) => <User key={item.id} {...item}/>)}
    </div>
    </>
  )
}
