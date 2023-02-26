import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../component/Carousel';
import { UserContext } from '../context/UserContext';

export default function Products() {
  const type = useParams().name
  console.log(type);

  const {products} = useContext(UserContext);
  return (

    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {products.map((item) => {
      console.log(item.category);
      console.log(type);
     
      if (type === item.category) {
        return <Carousel key={item.ProductId} {...item}/>
      }
    })
    }
    </div>
    
    </>
  )
}
