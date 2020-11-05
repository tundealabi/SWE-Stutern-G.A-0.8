const express = require("express");
const client = require("../db");

const router = express.Router();

router
    .route("")
        .get(async (req,res,next)=>{
           try{
                const gradsResult = await client.query("SELECT * FROM graduates");
                return res.status(200).json(gradsResult.rows);
           }
           catch(err){
               return next(err);
           }
        })
        .post(async (req,res,next)=>{
           try{
                const gradsResult = await client.query("INSERT INTO graduates name VALUES ($1) RETURNING *",[req.body.name]);
                return res.status(200).json(gradsResult.rows);
           }
           catch(err){
               return next(err);
           }
        });
router
    .route("/:id")
        .patch(async (req,res,next)=>{
            try {
                const gradsResult = await client.query("UPDATE graduates SET name = ($1) WHERE id = ($2) RETURNING *",[req.body.name,req.params.id]);
                return res.status(200).json(gradsResult.rows);
            } catch (error) {
                return next(error);
            }
        })
        .delete(async (req,res,next)=>{
            try {
                const gradsResult = await client.query("DELETE FROM graduates WHERE id = ($1) RETURNING *",[req.params.id]);
                return res.status(200).json({status: "Deleted",item: gradsResult.rows});
            } catch (error) {
                return next(error);
            }
        });


module.exports = router;