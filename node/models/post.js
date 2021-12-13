const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
    title:{
        type : String,
        required:true
    },
    area:{
        type : String,
        required:true
    },
    content:{
        type : String,
        required:true
    }
},{
        timestamps : true
});
module.exports = mongoose.model('post', postSchema);