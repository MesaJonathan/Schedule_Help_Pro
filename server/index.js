//MERN = Mongo + Express + React + Node

// Development = Node.js server + React server

//MEN

// E - Express

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const User = require('./models/user.model')
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
        return res.json({status: 'ok', user: true})
    } else {
        return res.json({status: 'error', user: false})
    }
});

app.listen(1337, () => {
    console.log('Server started on 1337');
});