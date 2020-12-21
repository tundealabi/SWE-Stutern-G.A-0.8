const mongoose = require("mongoose");

module.exports = mongoose.model("Owner",new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlength: 4,
        maxlength: 15
    },
    pets:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pet"
        }
    ]
}));