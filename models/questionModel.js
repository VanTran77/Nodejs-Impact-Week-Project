const mongoose = require('mongoose')
const User = require('../models/userModel')

const Schema = mongoose.Schema

const questionSchema = new Schema( {
    question :{
        type:String,
        required:true,
        minlength: 5
    },
    description :{
        type:String,
        required:true,
        minlength: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
    }
}, { timestamps:true})

const questionModel = mongoose.model('questionModel', questionSchema)

module.exports = {
    questionModel
}