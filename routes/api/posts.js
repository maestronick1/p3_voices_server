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
    console.log(newPost)
    const post = new Post ({
        title,
        content,
        category,
        postedBy: req.user
    })
    post.save()
    .then(createdPost=>{
        res.json({post:createdPost})
    })
    .catch(err=> {
        console.log('Error while creating new post', err)
        
    })
})

// router.get('/mypost', (req,res)=>{
//     Post.find({postedBy: req.user._id})
//     .populate("postedBy", "name")
//     .then(mypost=>{
//         res.json({mypost})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })


// router.put('/editpost', (req,res)=>{
//     db.Post.findByIdAndUpdate(
//         req.body.title,
//         req.body.content,
//         req.body,category,
//         {new: true}
//     )
//     .populate("postedBy", "name")
//     .exec((err, result)=>{
//         if (err){
//             return res.status(422).json({error:err})
//         } else {
//             res.json(result)
//         }
//     })
// })

// router.delete('/deletepost', (req,res)=>{
//     db.Post.findById(req.params.id)
//     .then(post=>{
//         post.id(req.params.postId)
//         .remove()
//         .save()
//     })
//     .catch(err=>{
//         console.log("error delete", err)
//     })
// })

module.exports = router