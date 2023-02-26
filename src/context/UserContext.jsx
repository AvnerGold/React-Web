import { createContext,useState,useEffect } from "react";


export const UserContext = createContext();

export default function UserContextProvider({children}){

    const [users, SetUsers] = useState([]);
    const [profile,SetProfile] = useState(0);
    const [products,SetProducts] = useState([])
    


    const LoadUsers = async () => {
        try {
        let res = await fetch('./data/user.json');
        let data = await res.json();
        SetUsers(data);} catch (error){
            console.error("errorrrrrr" ,error);
        }
        try {
        let proRes = await fetch('./data/products.json');
        let ProData = await proRes.json();
        console.log("errorrrrrr" ,ProData);
        SetProducts(ProData);} catch (error){
            console.error(error);
        }
        
    }
    
    const LoadId = (id) =>{
        console.log(id);
        SetProfile(id)

    }
    
   
    useEffect(() => {
       LoadUsers();       
    },[])

    const value = {
        users,
        profile,
        products,
        SetProducts,
        SetUsers,
        SetProfile,
        LoadId
    }


    return (
        <UserContext.Provider value={value}>
        {children}
        </UserContext.Provider>
    )
}