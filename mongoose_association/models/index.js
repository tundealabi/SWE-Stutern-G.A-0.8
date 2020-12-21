const mongoose = require("mongoose");
const Owner = require("./owner");
const Pet = require("./pet");

mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.set('useFindAndModify',false);
mongoose.connect("mongodb://localhost/pets-app")
    .then(()=>console.log("Mongoose is hot"))
    .catch(err=>console.log("Err...Something broke @ mongoose",err.message));


module.exports = {OwnerModel:Owner,PetModel:Pet};