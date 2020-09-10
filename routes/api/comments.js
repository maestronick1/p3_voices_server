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
const db = require('../../models/Comment');

router.get('/test', (req, res) => {
    res.json({ msg: 'User endpoint OK'});
  });

// find all comments
router.get('/allcomment', (req, res)=>{
    db.Comment.find()
    .populate("user", "id")
    .sort('-createAt')
    .then(foundComment=>{
        res.json({comment:foundComment})
    })
    .catch(err=> {
        console.log('Error while posting comment', err)
        
    })
})

//create a new comment
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

// edit comment
router.put('/:id', (req,res)=>{
    db.Comment.findByIdAndUpdate(
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


//delete comment
router.delete('/:id', (req,res)=>{
    db.Comment.findByIdAndDelete(
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