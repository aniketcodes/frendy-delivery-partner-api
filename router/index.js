const express=require("express");
const router=express.Router();

router.get("/",function(req,res){
    res.render("home");
});

router.use("/api",require("./api"));

module.exports=router;