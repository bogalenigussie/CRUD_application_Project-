const mongoose = require("mongoose");


//creating mongoDB schema
var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})

const Userdb = mongoose.model("userdb", schema);
module.exports = Userdb;