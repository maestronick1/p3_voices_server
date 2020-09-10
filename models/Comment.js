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
module.exports = Comment = mongoose.model('Comment', CommentSchema)