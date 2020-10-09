const express=require("express");
const router=express.Router();
const api=require("../controllers/api");

router.get("/:pincode",api.fetchDetails);

module.exports=router;