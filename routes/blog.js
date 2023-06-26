const express = require("express");
const { getAllPosts, createPost } = require("../controllers/blogs");
const router = express.Router()


router.get("/",(req,res)=>{

    getAllPosts().then(({posts})=>{
        console.log(posts);
        res.render("index",{posts})

    })
    .catch(err=>console.log(err))


})

router.get("/create",(req,res)=>{
   res.render("create")
})

router.post("/create",(req,res)=>{
    createPost(req.body).then(()=>res.redirect("/"))
    .catch(err=>console.log(err))
})

router.get("/:id",(req,res)=>{

})

router.post("/:id",(req,res)=>{

})


router.put("/:id",(req,res)=>{

})


router.delete("/:id",(req,res)=>{

})

module.exports = router