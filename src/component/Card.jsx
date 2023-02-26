import React from 'react'
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

export default function Card() {

const {products} = useContext(UserContext);
const { id } = useParams();
const parsedId = parseInt(id);

const {cartItem,SetCartItem} = useContext(CartContext);


const AddToCart = (item) => {
console.log(cartItem);
console.log(typeof(cartItem));
SetCartItem((prevItem) => [...prevItem,item]);
}



return (

<>
  {
  products.map((item) => {
  if (item.ProductId === parsedId) {

  return <section key={item.ProductId}>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="card" styles="border-radius: 15px;">
            <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
              data-mdb-ripple-color="light">
              <div className='d-flex justify-content-center'>
                <img src={`.${item.image}`} className="mx-auto d-block " alt={`${item.name}`} />

              </div>

            </div>
            <div className="card-body pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>{item.name}</p>
                  <p className="small text-muted">{item.category}</p>
                </div>
                <div>
                  <p className="small text-muted">Rated 4.0/5</p>
                </div>
              </div>
            </div>
            <hr className="my-0" />
            <div className="card-body pb-0">
              <div className="d-flex justify-content-between">
                { item.price < item.sellPrice ? <p>{item.price}</p> : <p>{item.sellPrice}</p>}
                  <p className="text-dark">#### {item.ProductId}</p>
              </div>
              <p className="small text-muted">{item.info}</p>
            </div>
            <hr className="my-0" />
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                <a href="#!" className="text-dark fw-bold"><Link to="/home">cancel</Link></a>
                <button type="button" className="btn btn-primary" onClick={()=> AddToCart(item)}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  }
  })

  }

</>
)
}