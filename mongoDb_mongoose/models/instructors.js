const mongoose = require("mongoose");

exports.Instructor = mongoose.model("instructor",new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
        minlength:4
    },
    lastName:{
        type: String,
        required:true,
        minlength:4
    },
    isHilarious:{
        type:Boolean,
        default:false
    }
},
{timestamps:true}
))