const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types





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
        type: String,
        
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
    imageUrl:{
        type: String
    }
    
    

})

module.exports = User = mongoose.model('User', UserSchema)



