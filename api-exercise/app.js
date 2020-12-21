const express = require("express");
//require("./db");
const usersRoute = require("./route/users");
const app = express();

app.use(express.json())
app.use("/api/users",usersRoute);

app.use((err,req,res,next)=>{
    return res.status(err.status||500).json({error:err.message});
})
module.exports = app;