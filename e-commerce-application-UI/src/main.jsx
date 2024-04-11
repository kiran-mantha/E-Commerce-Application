import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './public/Login.jsx'
import Register from './public/Register.jsx'
import Home from './public/Home.jsx'
import SellerDashboard from './private/seller/SellerDashboard.jsx'
import Cart from './private/customer/Cart.jsx'
import Order from './private/customer/Order.jsx'
import Wishlist from './private/customer/Wishlist.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/seller-dashboard' element={<SellerDashboard/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/verify-otp'/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
