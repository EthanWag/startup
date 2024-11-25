import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../public/PrivateRoute.jsx';

import Enter from './enter/enter.jsx'
import Main from './main/main.jsx'
import Market from './market/market.jsx'
import Inventory from './userInventory/inventory.jsx'
import UserItem from './userItems/UserItem.jsx'
import Cart from './userCart/Cart.jsx'
import Register from './register/register.jsx'
import Login from './login/login.jsx'
import Messages from './messages/Message.jsx'
import About from './about/About.jsx'
import Account from "./account/Account.jsx";
import {AuthProvider} from "../public/AuthContext.jsx";

import '../public/style.css';

export default function App() {

  return (
    <>
        <React.StrictMode>
            <AuthProvider>
                <div className="frame">
                    <BrowserRouter>
                        <Routes>
                            <Route path={'/'} element={<Enter/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='/register' element={<Register/>}/>
                            <Route path='/main' element={<PrivateRoute element={<Main/>}/>}/>
                            <Route path='/market' element={<PrivateRoute element={<Market/>}/>}/>
                            <Route path='/inventory' element={<PrivateRoute element={<Inventory/>}/>}/>
                            <Route path='/item' element={<PrivateRoute element={<UserItem/>}/>}/>
                            <Route path='/cart' element={<PrivateRoute element={<Cart/>}/>}/>
                            <Route path='/messages' element={<PrivateRoute element={<Messages/>}/>}/>
                            <Route path='/about' element={<PrivateRoute element={<About/>}/>}/>
                            <Route path='/account' element={<PrivateRoute element={<Account/>}/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </BrowserRouter>
                </div>
            </AuthProvider>
        </React.StrictMode>
    </>
  )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}


