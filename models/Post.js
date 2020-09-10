const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const PostSchema = new Schema ({
    postedBy:{
        type: ObjectId,
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
    image: {
        type:String,
        
    },
    reaction: [{
        type: ObjectId,
        ref: "User"
    }]
   
    
})

module.exports = Post = mongoose.model('Post', PostSchema)
