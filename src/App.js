
import { BrowserRouter,Route,Routes } from "react-router-dom"

// component
import Header from "./component/Header"
import Footer from "./component/Footer"
import Booking from "./component/page/Booking"
import Confirm from "./component/page/Confirm"

// data
import data from './data/travel.json'
import { useState } from "react"

function App(){
  const Basedata = data
  const [cart,setCart] = useState([])


  return(
   
    <BrowserRouter>
     <Header/>
      <div id="wrap">
        <Routes>
          <Route path="/" element = {<Booking Bdata = {Basedata} setCart = {setCart} cart = {cart}/>}/>
          <Route path="/confirm" element = {<Confirm cart = {cart} setCart = {setCart}/>}/>
        </Routes>
        </div>

     <Footer/>
    </BrowserRouter>

  )
}


export default App