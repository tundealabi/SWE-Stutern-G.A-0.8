const mongoose = require("mongoose");
const { Instructor } = require('./models/instructors');

mongoose.connect("mongodb://localhost/exrcise",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log("Mongoose is hot"))
    .catch((err)=>console.log("Err..something broke",err))

const createInstructor = async (fname,lname,isHilarious) => {
    try {
        const newUser = await Instructor.create({
            firstName:fname,
            lastName:lname,
            isHilarious
        })
        console.log(newUser);
    } catch (error) {
        console.log(error);
    }
}
//createInstructor("tunde","alabi");
const findInstructors = async (fname) => {
    try {
        const user = fname ? 
        await Instructor.find({firstName:fname}).select("firstName lastName isHilarious -_id")
        : 
        await Instructor.find().select("firstName lastName isHilarious -_id");
    console.log(user.length ? user : "No User");
    } catch (error) {
        console.log(error);
    }
}

//findInstructors("tunde")
const updateInstructor = async (fname,dataObj) =>{
    try {
        const instructor = await Instructor.updateOne({firstName:fname},{
            $set:{
                ...dataObj
            }
        });
        console.log({message:"Updated"});
    } catch (error) {
        console.log(error);
    }
}
//updateInstructor("tunde",{isHilarious:true})
const removeInstructor = async (id) => {
    try {
        const removedInstructor = await Instructor.findByIdAndDelete(id);
        console.log(removedInstructor);
    } catch (error) {
        console.log(error);
    }
} 
//removeInstructor("5fbba3c704f0ec17c8fd739a")