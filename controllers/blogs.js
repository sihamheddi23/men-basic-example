const Blog = require("../models/blogs")



const getAllPosts= async ()=>{
    try {
        const posts = await Blog.find()
        if(posts) return {posts}
    } catch (error) {
        throw new Error(error)
    }
}


const createPost = async (post)=>{
    try {
        const p= new Blog({...post})
         await p.save()
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = {getAllPosts,createPost}