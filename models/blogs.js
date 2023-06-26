const mongoose = require("mongoose")




const BlogSchema = mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
 
},{timestamps:true})

const Blog = mongoose.model("Blog",BlogSchema)
module.exports = Blog