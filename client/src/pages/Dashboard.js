import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
 
const Dashboard = () => {
    const navigate = useNavigate()
    const [quote, setQuote] = useState('')

    async function populateQuote() {
        const req = await fetch('http://localhost:1337/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })

        const data = req.json()
        if(data.status === 'ok') {
            setQuote(data.quote)
        } else {
            alert(data.error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            const user = jwt_decode(token)
            if(!user) {
                localStorage.removeItem('token')
                navigate('/login', { replace: true})
            } else {
                populateQuote()
            }
        }
    }, [])

    return <h1>Your qoute: {quote || 'No quote found' } </h1>
}

export default Dashboard