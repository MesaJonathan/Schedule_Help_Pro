import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import ClasList from './pages/Classlist'
import ClassView from './pages/ClassView'
import Homescreen from './pages/Homescreen'


const App = () => {
    return (
        <div>
            <BrowserRouter> 
                <Routes>
                    <Route path="/" element={<Navigate replace to="login" />} />
                    <Route path="/login"  element={<Login/>} />
                    <Route path="/home"  element={<Homescreen/>} />
                    <Route path="/register"  element={<Register/>} />
                    <Route path="/dashboard"  element={<Dashboard/>} />
                    <Route path="/classlist"  element={<ClasList/>} />
                    <Route path="/classview"  element={<ClassView/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App