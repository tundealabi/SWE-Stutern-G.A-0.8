const mongoose = require("mongoose");

module.exports = mongoose.model("Pet",new mongoose.Schema({
    petname:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Owner"
         }
}));