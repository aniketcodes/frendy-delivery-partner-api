const express=require("express");
const app=express();
const PORT=process.env.PORT || 8000;
const cors = require('cors');

app.use(cors());

app.set("view engine","ejs");

app.use(express.urlencoded());

app.use("/",require("./router"));
app.listen(PORT,function(err){
    if(err){
        console.log(`Error in serving at port ${PORT}`);
        return;
    }
    else{
        console.log(`Serving at port ${PORT}`);
    }
});