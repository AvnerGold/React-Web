import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function InCartCard({ProductId,name,price,sellPrice,image,category,info,quantity}) {
    let removeItem = 0;
    const {cartItem,SetCartItem} = useContext(CartContext)
    const RemoveFromCart = (item) => {
        const newCart = cartItem.filter((element) => element.ProductId !== item)
        SetCartItem(newCart)
    }
  return (
   <>
   <section key={ProductId} >
  <div className="container py-5">
    <div className="row justify-content-center">
      
        <div className="card" styles="border-radius: 15px;">
          <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <div className='d-flex justify-content-center'>
                <img src={`.${image}`}
                className="mx-auto d-block "
                alt="Laptop" />

            </div>
            
          </div>
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              <div>
                <p>{name}</p>
                <p className="small text-muted">{category}</p>
              </div>
              <div>
                <p className="small text-muted">Rated 4.0/5</p>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-between">
              { price < sellPrice ? <p>{price * quantity}$</p> : <p>{sellPrice * quantity}$</p>}
              <p className="text-dark">#### {ProductId}</p>
            </div>
            <p className="small text-muted">{info}</p>
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <div className="d-flex justify-content-center align-items-center pb-2 mb-1">
            
              <button type="button" className="btn btn-danger" onClick={() => RemoveFromCart(ProductId)}>Remove</button>
            </div>
          </div>
        
        </div>
    </div>
  </div>
</section>
   </>
  )
}
