import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import ClasList from './pages/Classlist'


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login"  element={<Login/>} />
                    <Route path="/register"  element={<Register/>} />
                    <Route path="/dashboard"  element={<Dashboard/>} />
                    <Route path="/classlist"  element={<ClasList/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App