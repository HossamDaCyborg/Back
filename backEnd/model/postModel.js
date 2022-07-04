const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    pic:{
        type:String
    },
    
})
module.exports = mongoose.model('Post',postSchema);