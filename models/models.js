const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please provide your name"],
    },

    city:{
        type: String,
        required:[true,"Please provide your city"]
    },
    email:{
        type: String,
        required: [true,"Please provide your email"],
        unique:[true,"Email already taken. Provide a new email"],
        trim:true
    },
    age:{
        type: Number,
        required: [true,"Please provide your age"]
    },
    language:{
        type: String,
        required: [true,"Please provide your langauge"]
    }
})

const User = mongoose.model("User",UserSchema);
module.exports = User