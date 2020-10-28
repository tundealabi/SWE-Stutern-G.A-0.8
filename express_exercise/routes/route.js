const express = require("express");

const router = express.Router();

const data = [{id:1,item:"Wash the house",price:2000},{id:2,item:"Clean the road",price:3000},{id:3,item:"Sweep the roof",price:4000},{id:4,item:"Bath the car",price:5000},{id:5,item:"Kidnap Demilade",price:6000}];

router
  .route("/")
    .get((req,res)=>{
        res.render("index",{data});
    });
router
    .route("/new")
    .post((req,res)=>{
      const obj = {
        id: data[data.length-1] ? data[data.length-1].id + 1 : 1,
        item: req.body.item,
        price: parseInt(req.body.price)
      };
      data.push(obj);
      return res.redirect("/items");
    });
router
  .route("/:id")
    .get((req,res)=>{
      let item = data.find(item=>item.id === parseInt(req.params.id))
        if(item){
          res.render("single",{data:item});
        }else{
          res.status(400).send("<h1>Bad Request</h1>");
        }
    })
    .patch((req,res)=>{
      let itemIndex = data.findIndex(idx=>idx.id === parseInt(req.params.id))
      if(data[itemIndex]){
        data[itemIndex].item = req.body.item;
        data[itemIndex].price = parseInt(req.body.price);
        return res.redirect("/items");
      }else{
        return res.status(400).send("<h1>Bad Request</h1>");
      }
    })
    .delete((req,res)=>{
      let itemIndex = data.findIndex(idx=>idx.id === parseInt(req.params.id))
      if(itemIndex >= 0){
        data.splice(itemIndex,1)
        return res.redirect("/items");
      }else{
         return res.status(400).send("<h1>Bad Request</h1>");
      }
    });
router
  .route("/delete/:id")
    .get((req,res)=>{
      let itemIndex = data.findIndex(idx=>idx.id === parseInt(req.params.id));
      if(itemIndex === -1){
        return res.status(400).send("<h1>Bad Request</h1>");
      }else{
        return res.render("delete",{data:data[itemIndex]});
      }
       
    });
router
    .route("/edit/:id")
      .get((req,res)=>{
       let itemIndex = data.findIndex(idx=>idx.id === parseInt(req.params.id));
       if(itemIndex === -1){
        return res.status(400).send("<h1>Bad Request</h1>");
      }else{
       return res.render("edit",{data:data[itemIndex]});
      }
    });

module.exports = router;