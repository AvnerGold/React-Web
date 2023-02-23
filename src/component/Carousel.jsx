import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { UserContext } from '../context/UserContext'

export default function Carousel({ProductId,name,price,sellPrice,image,category,info,quantity}) {
    
    const {cartItem,SetCartItem} = useContext(CartContext);
    const {profile,SetProfile} = useContext(UserContext)

    const AddToCart = (item) => {
        let isIn = false
        cartItem.map((itemInCart) => {
            console.log(ProductId);
            console.log(itemInCart.ProductId);
            if(itemInCart.ProductId == ProductId ){
                itemInCart.quantity += 1;
                isIn = true;
            }
        })
        if(isIn == false){

            SetCartItem((prevItem) => [...prevItem,item])
            console.log(cartItem);
        }
    }

const item = {
    ProductId,
    name,
    price,
    sellPrice,
    image,
    category,
    info,
    quantity

}
    
  return (
   <>
  
  <div className="col" id={ProductId}>
    <div className="card">
      <Link to={`/infoproducts/${ProductId}`}><img src={image} className="card-img-top" alt="..."/></Link>
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center">{name}  {category}</h5>
        <div className='d-flex justify-content-center'>
            {
                price > sellPrice ? <><p className='p-2'><del>{price}$</del></p><p className='p-2'>{sellPrice}$</p></> : <p>{price}</p>
            }

        </div>
        <div className="d-flex justify-content-center align-items-center pb-2 mb-1">
            {
            profile == 1 ? <button type="button" className="btn btn-primary m-1" onClick={() => AddToCart(item)}>Edit</button> :
                           <button type="button" className="btn btn-primary " onClick={() => AddToCart(item)}>Add To Cart</button>
            }
              
             
            </div>
      </div>
    </div>
  </div>

   </>
  )

//   "id":6,
//   "name":"yop",
//   "price":25,
//   "sellPrice": 12,
//   "image":"./images/productImg/flower-6.png",
//   "category": "bouquet"
}
