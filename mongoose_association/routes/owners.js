require("express-async-errors");
const router = require("express").Router();
const petRouter = require("./pets");
const {OwnerModel} = require("../models");
const mongoose = require("mongoose");

const checkId = async(req,res,next)=>{
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(isValidId){
        const findOwner = await OwnerModel.findById(req.params.id);
        return findOwner ? next() : res.status(401).send("<h1>Looks like you entered an invalid owner id. Please check and retry.</h1>");
    }
    return res.status(401).send("<h1>Looks like you entered an invalid owner id. Please check and retry.</h1>");
}

router
    .route("/")
        .get(async(req,res)=>{
            const owners = await OwnerModel.find();
            return res.render("display-owners",{data:owners});
        })
        .post(async(req,res)=>{
            const newUser = await OwnerModel.create(req.body);
            return res.redirect(`/owners/${newUser._id}`);
        })

router
    .route("/:id")
        .get(checkId,async(req,res)=>{
                const findUser = await OwnerModel.findById(req.params.id);
                return res.render("display-owner",{user:findUser});
        })
        .patch(checkId,async(req,res)=>{
                const findUser = await OwnerModel.findByIdAndUpdate(req.params.id,req.body);
                return res.redirect(`/owners/${findUser._id}`);
        })
        .delete(checkId,async(req,res)=>{
                const findUser = await OwnerModel.findByIdAndDelete(req.params.id);
                return res.redirect("/owners");
        })
router
    .get("/create/new",(req,res)=>{
        return res.render("new-owner");
    })

router.use("/:ownerId/pets",petRouter);
module.exports = router;