require("express-async-errors");
const router = require("express").Router({mergeParams:true});
const {OwnerModel} = require("../models");
const {PetModel} = require("../models");
const mongoose = require("mongoose");

const checkOwnerId = async(req,res,next)=>{
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.ownerId);
    if(isValidId){
        const findOwner = await OwnerModel.findById(req.params.ownerId);
        return findOwner ? next() : res.status(401).send("<h1>Looks like you entered an invalid owner id. Please check and retry.</h1>");
    }
    return res.status(401).send("<h1>Looks like you entered an invalid owner id. Please check and retry.</h1>");
}
const checkPetId = async(req,res,next)=>{
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.petId);
    if(isValidId){
        const findPet = await PetModel.findById(req.params.petId);
        return findPet ? next() : res.status(401).send("<h1>Looks like you entered an invalid pet id. Please check and retry.</h1>");
    }
    return res.status(401).send("<h1>Looks like you entered an invalid pet id. Please check and retry.</h1>");
}
router
    .route("/")
        .get(checkOwnerId,async(req,res)=>{
            const owner = await OwnerModel.findById(req.params.ownerId).populate('pets');
            return res.render("display-pets",{data:owner});
        })
        .post(checkOwnerId,async(req,res)=>{
            const newPet = await PetModel.create(req.body);
            const owner = await OwnerModel.findByIdAndUpdate(req.params.ownerId,{$addToSet:{pets:newPet._id}});
            return res.redirect(`/owners/${owner._id}/pets`);
        })
router
    .route("/:petId")
        .get([checkOwnerId,checkPetId],async(req,res)=>{
            const findPet = await PetModel.findById(req.params.petId);
            return res.render("display-pet",{pet:findPet});
        })
        .patch([checkOwnerId,checkPetId],async(req,res)=>{
            const findPet = await PetModel.findByIdAndUpdate(req.params.petId,req.body);
            return res.redirect(`/owners/${findPet.owner}/pets/${findPet._id}`);
        })
        .delete([checkOwnerId,checkPetId],async(req,res)=>{
            const removePet = await PetModel.findByIdAndDelete(req.params.petId);
            await OwnerModel.findByIdAndUpdate(removePet._id,{
                $pull:{
                    pets:removePet._id
                }
            })
            return res.redirect(`/owners/${removePet.owner}/pets`);
        })

router
    .route("/create/new")
        .get(checkOwnerId,async(req,res)=>{
            const owner = await OwnerModel.findById(req.params.ownerId);
            return res.render("new-pet",{data:owner});
        })

module.exports = router;