const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CommentSchema = new Schema ({
    user: [{
        type:String,
        ref: "User"
    }],

    content: {
        type: String,
        required: true,
        
    }
})
module.exports = Comment = mongoose.model('Comment', CommentSchema)

const PostSchema = new Schema ({
    User:{
        type: String,
        required: true,
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
    textContent: {
        type: String,
        required: true
    },
    comments: [CommentSchema]
})

module.exports = Post = mongoose.model('Post', PostSchema)

// User Schema 
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 99
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        
    },
    profilePic: {
        type: String
    },
    content: {
        type: String
    },
    bio: {
        type:String
    },
    artistType:{
        type: String,
        required: true
    },
    post: [PostSchema],
    
    

})

module.exports = User = mongoose.model('User', UserSchema)



