const logListen = require("debug")("app:serverListen");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const route = require("./routes/route");
const app = express();

app.use(morgan("tiny"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));
app.use("/items",route);
app.set("view engine","pug");

app.get("/",(req,res)=>{
    return res.status(300).redirect("/items");
})

const port = process.env.PORT || 3000;

app.listen(port,()=>logListen(`Server is hot at ${port}`));