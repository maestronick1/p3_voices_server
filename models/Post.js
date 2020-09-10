const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types


const CommentSchema = new Schema ({
    user: [{
        type:ObjectId,
        ref: "User"
    }],

    comments: {
        type: String,
        required: true,
        
    }
})

const PostSchema = new Schema ({
    postedBy:{
        type: Object,
        ref: "User"
        
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    reaction: [{
        type: ObjectId,
        ref: "User"
    }]
    
})

module.exports = Post = mongoose.model('Post', PostSchema)