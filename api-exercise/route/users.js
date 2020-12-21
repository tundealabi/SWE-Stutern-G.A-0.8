const router = require("express").Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auth = (req,res,next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payLoad = jwt.verify(token,"Never do this");
        if(payLoad.isAdmin) return next()
        else{
            return res.status(403).json({message:"Unauthorized request"});
        }
    } catch (error) {
        next(error);
    }
}

router
    .route("/")
        .get(auth, async(req,res,next)=>{
            try {
               const result = await db.query("SELECT id,username,isAdmin FROM users")
                res.json(result.rows);
            } catch (error) {
                next(error)
            }
        })
        .post(async(req,res,next)=>{
            //you should do some validation here in the real world
            try {
                const { username, password } = req.body;
                let isAdmin = req.body.isAdmin === true ? true : false;
                const hashPwd = await bcrypt.hash(password,10);
                const result = await db.query("INSERT INTO users (username,password,isAdmin) VALUES ($1,$2,$3) RETURNING id,username,isAdmin",[username,hashPwd,isAdmin]);
                return res.status(201).json({user:result.rows[0]});
            } catch (error) {
                next(error);
            }
        });
router
    .route("/login")
        .post(async(req,res,next)=>{
            try {
                const { username, password } = req.body;
                const user = await db.query("SELECT * FROM users WHERE username=$1",[username]);
                const isTrue = await bcrypt.compare(password,user.rows[0].password);
                if(!isTrue) return res.status(400).json({message:"Invalid username or password"});
                const token = jwt.sign({id:user.rows[0].id,isAdmin:user.rows[0].isadmin},"Never do this",{expiresIn:60*60})
                return res.status(201).json({token:`Bearer ${token}`});
            } catch (error) {
                next(error)
            }
        });

const auth2 = (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payLoad = jwt.verify(token,"Never do this");
        if(payLoad.isAdmin || payLoad.id === parseInt(req.params.id)){
            return next();
        }
        else{
            return res.status(403).json({message:"Unauthorized request to perform operation on this profile"});
        }
    } catch (error) {
        next(error);
    }
}

router
    .route("/:id")
        .get(auth2,async(req,res,next)=>{
            try {
            const result = await db.query("SELECT id,username,isAdmin FROM users WHERE id=$1",[parseInt(req.params.id)]);
            res.status(201).json(result.rows);   
            } catch (error) {
                next(error);
            }
        })
        .post(auth2,async(req,res,next)=>{
            try {
             const {username,password} = req.body;
             const user = await db.query("SELECT id,username,password FROM users WHERE id=$1",[parseInt(req.params.id)]);
             if(user.rows.length){
                 user.rows[0].username = username || user.rows[0].username;
                 user.rows[0].password = password ? await bcrypt.hash(password,10) : user.rows[0].password;
                const result = await db.query("UPDATE users SET username=$2,password=$3 WHERE id=$1 RETURNING id,username,isAdmin",[parseInt(req.params.id),user.rows[0].username,user.rows[0].password]);
                res.status(201).json(result.rows); 
             }
               else return res.status(401).json({message:"No such user"})
            } catch (error) {
                next(error);
            }
        })
        .delete(auth2,async(req,res,next)=>{
            try {
                await db.query("DELETE FROM users WHERE id=$1",[parseInt(req.params.id)]);
                return res.status(201).json({message:"User Deleted"});
            } catch (error) {
                next(error);
            }
        })
module.exports = router;