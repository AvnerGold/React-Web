import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CartContextProvider,{CartContext} from "./context/CartContext"
import UserContextProvider, { UserContext } from "./context/UserContext"
import Profile from "./pages/Profile"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import InfoProduct from "./pages/InfoProduct"
import Payment from "./pages/Payment"
import Home from "./pages/Home"
import Header from "./component/Header"
import EditProduct from "./pages/EditProduct"


function App() {

  return (
    <UserContextProvider>
     <CartContextProvider> 
     <BrowserRouter>
     
    <Header/>


    <Routes>
      <Route path="/edit/:id" element={<EditProduct/>} />
      <Route path="user/:id" element={<Profile/>} />
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/infoproducts/:id" element={<InfoProduct/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
     </BrowserRouter>

   </CartContextProvider>
   </UserContextProvider>
   
  )
}

export default App
