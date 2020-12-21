const express = require("express");
const ownersRoute = require("./routes/owners");
const methodOverride = require("method-override");
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.use("/owners",ownersRoute);

app.get("/",(req,res,next)=>{
    return res.render("index");
})

app.use((err,req,res,next)=>{
    console.log(err.message);
    return res.json({message:err.message});
})

const port = process.env.PORT || 3500;

app.listen(port,()=>console.log(`Server is hot @ ${port}`));