const express = require("express");
const client = require("../db");
const validate = require("../middleware/validator");

const router = express.Router();

router
    .route("/:id/offers")
        .get(async (req,res,next)=>{
            try {
                const gradsResult = await client.query("SELECT * FROM graduates WHERE id = $1",[req.params.id]);
                const offersResult = await client.query("SELECT * FROM offers WHERE graduate_id = $1",[req.params.id]);
                gradsResult.rows[0].offers = offersResult.rows;
                return res.status(200).json(gradsResult.rows[0]);
            } catch (error) {
                return next(error);
            }
        })
        .post(validate,async (req,res,next)=>{
            try {
                const offersResult = await client.query("INSERT INTO offers (title,graduate_id) VALUES ($1,$2) RETURNING *",[req.body.title,req.params.id]);
                return res.status(200).json(offersResult.rows[0]);
            } catch (error) {
                return next(error);
            }
        });
router
    .route("/:graduate_id/offers/:id")
        .get(async (req,res,next)=>{
            try {
                const offersResult = await client.query("SELECT * FROM offers WHERE graduate_id = $1 AND id = $2",[req.params.graduate_id,req.params.id]);
                return res.status(200).json(offersResult.rows);
            } catch (error) {
                return next(error);
            }
        })
        .patch(validate,async (req,res,next)=>{
            try {
                const offersResult = await client.query("UPDATE offers SET title = $1 WHERE graduate_id = $2 AND id = $3 RETURNING *",[req.body.title,req.params.graduate_id,req.params.id]);
                return res.status(200).json(offersResult.rows[0]);
            } catch (error) {
                return next(error);
            }
        })
        .delete(async (req,res,next)=>{
            try {
                await client.query("DELETE FROM offers WHERE graduate_id = $1 AND id = $2",[req.params.graduate_id,req.params.id]);
                return res.status(200).json({message: "Successfully deleted"});
            } catch (error) {
                return next(error);
            }
        })
module.exports = router;