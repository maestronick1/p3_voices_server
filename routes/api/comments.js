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

router.get('/test', (req, res) => {
    res.json({ msg: 'User endpoint OK'});
  });

router.get('/allcomment', (req, res)=>{
    Comment.find()
    .populate("user", "id")
    .sort('-createAt')
    .then(foundComment=>{
        res.json({comment:foundComment})
    })
    .catch(err=> {
        console.log('Error while posting comment', err)
        
    })
})

router.post('/new', (req,res)=>{
    const comment = new Comment ({
        comments: req.body.comments,
        user: req.user
    })
    comment.save()
    .then(createdComment=>{
        res.json({comment:createdComment})
    })
    .catch(err=> {
        console.log('Error while creating new post', err)
        
    })
})

router.put('/:id', (req,res)=>{
    Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    .populate("user", "_id")
    .exec((err, result)=>{
        if (err){
            return res.status(422).json({error:err})
        } else {
            res.json(result)
        }
    })
})

router.delete('/:id', (req,res)=>{
    Comment.findByIdAndDelete(
        req.params.id,
        
        )
    .populate("user", "id")    
    .then(()=>{
        res.json('comment deleted')
    })
    .catch(err=>{
        res.status(400).json('error', err)
    })   
    
})
module.exports = router