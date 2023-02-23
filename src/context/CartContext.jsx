import { createContext } from "react";
import { useState,useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider({children}){


    const [cartItem,SetCartItem] = useState([])

    const LoadCart = async () => {
        
    }
    
    
    useEffect(() => {
        console.log(cartItem);
    },[cartItem])
    const Cartvalue = {
        cartItem,
        SetCartItem

    }

    return (
        // <CartContext.Provider value={value}>
        // {children}
        // </CartContext.Provider>
        <CartContext.Provider value={Cartvalue}>
            {children}
        </CartContext.Provider>
    )
}