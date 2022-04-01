//MERN = Mongo + Express + React + Node

// Development = Node.js server + React server

//MEN

// E - Express

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/user-login-info')

app.post('/api/register', async (req, res) => {
    try{
        await User.create({
            userName: req.body.userName,
            password: req.body.password,
        })
        res.json({ status: 'ok'})
    } catch(err) {
        console.log(err)
        res.json({ status: 'error', error: 'Username already taken'})
    }
});

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        userName: req.body.userName, 
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            username: req.body.userName,
        }, 'secret123')

        return res.json({status: 'ok', user: token})
    } else {
        return res.json({status: 'error', user: false})
    }
});

app.get('/api/quote', async (req, res) => {
    const token = req.headers['x-access-token']
    
    try{
        const decoded = jwt.verify(token, 'secret123')
        const userName = decoded.userName
        const user = await User.findOne({userName: userName})

        return res.json({status: 'ok', quote: user.quote })
    } catch(error) {
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
});

app.post('/api/quote', async (req, res) => {
    
    const token = req.headers['x-access-token']
    
    try{
        const decoded = jwt.verify(token, 'secret123')
        const userName = decoded.userName
        await User.updateOne(
            {userName: userName}, 
            {$set: {quote: req.body.quote}}
        )

        return{status: 'ok'}
    } catch(error) {
        console.log(error)
        res.json({status: 'error', error: 'invalid token'})
    }
});

app.listen(1337, () => {
    console.log('Server started on 1337');
});