import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../component/Card';
import { UserContext } from '../context/UserContext';

export default function InfoProduct() {
  const {products} = useContext(UserContext);

  

  const { id } = useParams();
  const parsedId = parseInt(id);

  

  const showInfo = () =>{

    
  }

  useEffect(() => {
    showInfo()
  },[])

  return (
   <>
    <Card/>
   </>
  )
}
