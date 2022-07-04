const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text : {
        type: String,
        required : [true , ' plese add som text']
    }
} , {
    timestamps : true 
})

module.exports = mongoose.model('Goal' , goalSchema)