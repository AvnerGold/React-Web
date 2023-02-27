import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Carousel from '../component/Carousel'
import Header from '../component/Header'
import { UserContext } from '../context/UserContext';

export default function Home() {

  const {products} = useContext(UserContext);
  
  
  return (

   <>
   <div className="row row-cols-1 row-cols-md-3 g-0">

   {products.map((item) => <Carousel key={item.ProductId} {...item}/>)}
   </div>
   </>
  )
}
