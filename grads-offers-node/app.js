const express = require("express");
const gradsRoutes = require("./routes/grads");
const offersRoutes = require("./routes/offers");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use("/grads",gradsRoutes);
app.use("/grads",offersRoutes);
// app.use((req,res,next)=>{
//     const err = new Error("Bad request");
//     err.status = 400;
//     return next(err);
// });

app.get("/",(req,res,next)=>{
    return res.status(303).redirect("/grads");
});

app.use((err,req,res,next)=>{
    return res.status(err.status || 500).json({
        message: err.message,
        error: err
    });
});

const port = process.env.PORT || 4500;
app.listen(port,()=>console.log(`Server is hot at ${port}`));

