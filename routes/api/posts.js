require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const passport = require('passport');
const JWT_SECRET = process.env.JWT_SECRET;
console.log(process.env);
// Load User model
// const User = require('../../models/User');
const db = require('../../models');

router.get('/post', (req, res)=>{
    res.json({messsage: 'user endpoint is ok'})
})

router.post('/newpost', (req,res)=>{
    const {title, content, category} = req.body
    const post = new Post ({
        title,
        content,
        category
    })
    post.save()
    .then(createdPost=>{
        res.json({post:createdPost})
    })
    .catch(err=> {
        console.log('Error while creating new post', err)
        
    })
})


module.exports = router