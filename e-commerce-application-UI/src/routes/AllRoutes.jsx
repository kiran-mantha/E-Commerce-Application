import React, { useState } from 'react'
import App from '../App.jsx'
import Login from '../public/Login.jsx'
import Register from '../public/Register.jsx'
import Home from '../public/Home.jsx'
import SellerDashboard from '../private/seller/SellerDashboard.jsx'
import AddProduct from '../private/seller/AddProduct.jsx'
import Cart from '../private/customer/Cart.jsx'
import Order from '../private/customer/Order.jsx'
import Wishlist from '../private/customer/Wishlist.jsx'
import Explore from '../private/customer/Explore.jsx'
import Account from '../private/common/Account.jsx'
import AddAddress from '../private/common/AddAddress.jsx'
import EditProfile from '../private/common/EditProfile.jsx'
import VerifyOTP from '../public/VerifyOTP.jsx'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  
    let routers = {
          home: <Route key={'home'} path='/' element={<Home/>}/>,
          login: <Route key={'login'} path='/login' element={<Login/>}/>,
          register: <Route key={'register'} path='/register' element={<Register/>}/>,
          address: <Route key={'add-address'} path='/add-address' element={<AddAddress/>}/>,
          account: <Route key={'account'} path='/account' element={<Account/>}/>,
          dashboard: <Route key={'seller-dashboard'} path='/seller-dashboard' element={<SellerDashboard/>}/>,
          addProduct: <Route key={'add-product'} path='/add-product' element={<AddProduct/>}/>,
          cart: <Route key={'cart'} path='/cart' element={<Cart/>}/>,
          order: <Route key={'orders'} path='/orders' element={<Order/>}/>,
          wishlist: <Route key={'wishlist'} path='/wishlist' element={<Wishlist/>}/>,
          verifyOTP: <Route key={'verify-otp'} path='/verify-otp' element={<VerifyOTP/>}/>,
          explore: <Route key={'explore'} path='/explore' element={<Explore/>}/>,
          editProfile: <Route key={'edit-profile'} path='/edit-profile' element={<EditProfile/>}/>
    }
    const user = {
        userId: 123,
        username: "abc",
        role: "SELLER",
        authenticated: true,
        accessExpiration: 3600,
        refreshExpiration: 1296000
    }

    const {role, authenticated} = user;
    let routes = [];

    if(authenticated) {
        // render routes that are assigned to all user roles
        // conditionally render routes that are role specific
        if(role==="CUSTOMER") {
            routes.push(routers.cart, routers.order, routers.wishlist, routers.account, routers.explore)
        }
        if(role==="SELLER") {
            routes.push(routers.dashboard, routers.account, routers.addProduct)
        }
        routes.push(routers.home, routers.address, routers.editProfile)
    }else {
        // render routes that are public and visible before login
        if(role==="CUSTOMER") {
        routes.push(routers.home, routers.login, routers.register, routers.verifyOTP, routers.explore)
        }
    }
    
    // routes.map(route=>{
    //     console.log(route.key)
    // })

    return (
        <Routes>
            <Route path='/' element={<App/>}>
                {routes}
            </Route>
        </Routes>
    )

}

export default AllRoutes
