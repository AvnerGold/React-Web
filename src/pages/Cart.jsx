import React from 'react'
import { useContext } from 'react'
import InCartCard from '../component/InCartCard'
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const {cartItem} = useContext(CartContext);
  console.log(cartItem);
  let total = 0
  cartItem.map((item) => total += item.price  > item.sellPrice ? item.sellPrice * item.quantity : item.price * item.quantity)
  console.log(total);
  return (
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">

    {
      cartItem.map((item) => <InCartCard key={item.ProductId} {...item}/>)
    }
    </div>
    
    </>
  )
}
