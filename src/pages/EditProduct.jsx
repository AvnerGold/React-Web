import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export default function EditProduct() {
    const {products,SetProducts} = useContext(UserContext);

    const id = parseInt(useParams().id);
    //  const parsedId = parseInt(id);
    console.log(id);

    
    // "ProductId":1,
    // "name":"yop",
    // "price":25,
    // "sellPrice": 12,
    // "image":"./images/productImg/flower-1.png",
    // "category": "bouquet",
    // "info":"loren Ipsum",
    // "quantity": 1

    function AddUser(ProductId,name,price,sellPrice,image,category,info){
        const newArr = [...products]
        let object = {
        ProductId,
          name,
          price,
          sellPrice,
          image,
          category,
          info,
        }
        let find;
        products.map((item,index) => {
            console.log(object);
            console.log(item.ProductId);
            // console.log(parsedId);
            if (item.ProductId === id) {
                // item.name = name;
                // item.price = price;
                // item.sellPrice = sellPrice;
                // item.image = image;
                // item.category = category;
                // item.info = info;
                
                console.log( item.ProductId);
                newArr[index] = object
                SetProducts(newArr)
            }
        })
        
    }
       

       useEffect(() =>{},[SetProducts])


    const handleChange =(e) => {
        e.preventDefault();
        AddUser(id,e.target[0].value,e.target[1].value,e.target[2].value,e.target[3].value,e.target[4].value,e.target[5].value);
       } 

  return (
    <>
     <form onSubmit={handleChange}>
      Enter name: <input type="text" placeholder='name'  /><br />
      Enter Price: <input type="number" placeholder='Price'  /><br />
      Enter sellPrice: <input type="number" placeholder='sellPrice'  /><br />
      Enter image: <input type="text" placeholder='image'  /><br />
      Enter category: <input type="text" placeholder='category'  /><br />
      Enter info: <input type="text" placeholder='info'  /><br />
      <input type="submit" />
    </form>
    </>
  )
}
