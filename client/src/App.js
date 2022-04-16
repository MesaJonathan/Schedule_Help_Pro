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
                    <Route path="/" element={<Navigate replace to="Homescreen" />} />
                    <Route path="/login"  element={<Login/>} />
                    <Route path="/home"  element={<Homescreen/>} />
                    <Route path="/register"  element={<Register/>} />
                    <Route path="/dashboard"  element={<Dashboard/>} />
                    <Route path="/classlist"  element={<ClasList/>} />
                    <Route path="/classview"  element={<ClassView/>} />
                    <Route path="/Homescreen"  element={<Homescreen/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App