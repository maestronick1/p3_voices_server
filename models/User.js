const mongoose = require('mongoose')
const Schema = mongoose.Schema


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
    }
   
})

module.exports = User = mongoose.model('User', UserSchema)



