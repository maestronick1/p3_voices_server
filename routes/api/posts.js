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
    Post.find()
    .populate("postedBy", "name")
    .sort('-createAt')
    .then(foundPost=>{
        res.json({post:foundPost})
    })
    .catch(err=> {
        console.log('Error while posting post', err)
        
    })
})


router.post('/newpost', (req,res)=>{
    const {title, content, category} = req.body
    const post = new Post ({
        title,
        content,
        category,
        postedby: req.user
    })
    post.save()
    .then(createdPost=>{
        res.json({post:createdPost})
    })
    .catch(err=> {
        console.log('Error while creating new post', err)
        
    })
})


router.put('/:id', (req,res)=>{
    Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    .populate("postedBy", "name")
    .exec((err, result)=>{
        if (err){
            return res.status(422).json({error:err})
        } else {
            res.json(result)
        }
    })
})

router.delete('/:id', (req,res)=>{
    Post.findByIdAndDelete(
        req.params.id
        )
    .populate("postedBy", "name")    
    .then(()=>{
        res.json('post deleted')
    })
    .catch(err=>{
        res.status(400).json('error', err)
    })   
    
})


module.exports = router