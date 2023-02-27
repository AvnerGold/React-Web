import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';

export default function AddProduct() {

    const {products,SetProducts} = useContext(UserContext);
    const addItem = (ProductId, name, price, sellPrice, image, category, info) => {
        const existingProduct = products.find((p) => p.ProductId === ProductId);
      
        if (existingProduct) {
          // Product with same ProductId already exists, don't add it again
          console.log(`Product with ProductId ${ProductId} already exists`);
          return;
        }
      
        const newProduct = {
          ProductId,
          name,
          price,
          sellPrice,
          image,
          category,
          info,
          quantity: 1 // assuming you want to set the initial quantity to 1
        };
      
        const updatedProducts = [...products, newProduct];
        SetProducts(updatedProducts);
      };
      
    useEffect(() => {
        console.log(products);
    },[products])

    const handleChange = (e) => {      
        e.preventDefault();
        addItem(e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value,e.target[4].value,e.target[5].value,e.target[6].value);
    }



  return (
   <>
  <div className='grid AddBox '>

  <form className="" onSubmit={handleChange}>
  <div className="form-group d-flex justify-content-between mx-auto ">
    <label htmlFor="id">id:</label>
    <input type="number" id="id" className="form-control  " placeholder="id" />
  </div>
  <div className="form-group d-flex justify-content-between mx-auto">
    <label htmlFor="name">name:</label>
    <input type="text" id="name" className="form-control" placeholder="name" />
  </div>
  <div className="form-group d-flex justify-content-between">
    <label htmlFor="price">Price:</label>
    <input type="number" id="price" className="form-control" placeholder="Price" />
  </div>
  <div className="form-group d-flex justify-content-between">
    <label htmlFor="sellPrice">sellPrice:</label>
    <input type="number" id="sellPrice" className="form-control" placeholder="sellPrice" />
  </div>
  <div className="form-group d-flex justify-content-between">
    <label htmlFor="image">image:</label>
    <input type="text" id="image" className="form-control" placeholder="image" />
  </div>
  <div className="form-group d-flex justify-content-between ">
    <label htmlFor="category">category:</label>
    <input type="text" id="category" className="form-control" placeholder="category" />
  </div>
  <div className="form-group d-flex justify-content-between">
    <label htmlFor="info">info:</label>
    <input type="text" id="info" className="form-control " placeholder="info" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>

            
   </>
  )
}
