import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import About from '../Pages/About.jsx'
import Register from '../Pages/Register'
import TourDetail from '../Pages/TourDetail'
import Tours from '../Pages/Tours'
import SearchDetail from '../Pages/SearchDetail'
import ThankYou from '../Pages/ThankYou'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={< Home/>}/>
        <Route path='/about' element={< About/>}/>
        <Route path='/login' element={< Login />}/>
        <Route path='/register' element={< Register/>}/>
        <Route path='/tours/:id' element={< TourDetail/>}/>
        <Route path='/tours' element={< Tours/>}/>
        <Route path='/thankyou' element={< ThankYou/>}/>
        <Route path='/tours/search' element={< SearchDetail/>}/>        
    </Routes>
  )
}

export default Router