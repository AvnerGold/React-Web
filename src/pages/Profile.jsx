import React from 'react'
import { useContext,useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import User from '../component/User';
import { UserContext } from '../context/UserContext';


export default function Profile() {
 const {users} = useContext(UserContext);
 const [profile,SetProfile] = useState([])

    const {id} = useParams();

    function displatProfile(){
        const found =  users.find((item) => {
            if(item.id == id){
                SetProfile(item)
                return item
            }
        })
}


useEffect(() => {
    displatProfile()
},[])

  return (
    <>
    <User key={profile.id} {...profile}/>
    </>
  )
}
