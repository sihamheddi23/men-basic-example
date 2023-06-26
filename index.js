const express = require("express");
const mongoose = require("mongoose")

const router = require("./routes/blog")

const app = express()

app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))
app.use("/assets",express.static(__dirname+"/assets"))


mongoose.connect("mongodb://127.0.0.1:27017/")
.then(()=>{
    console.log("khraaaa ");
    app.listen(3000)
})
.catch(err=>console.log(err))
  

app.use("/blogs",router)


app.get("/",(req,res)=>{
    res.redirect("/blogs/")
})



