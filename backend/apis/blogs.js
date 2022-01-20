const router =require("express").Router()
const Blogs =require("../model/error")



router.get("/blogs",async (req,res)=>{
    try{
        const allBlogs =await Blogs.find({})
        res.status(200).json(allBlogs)
    }
    catch(err){
        res.status(400).json({msg :"something wents wrong"})
    }
})

router.post("/blogs" ,async (req,res)=>{
    try {
        const {title,desc,img} =req.body
        await Blogs.create({title,desc,img})
        res.status(200).json({msg :"Blog is added sucessfully"})
    }
    catch(err){
        res.status(400).json({msg :"something wents wrong"})
    }
    
    })
router.get("/blogs/:id",async (req,res)=>{
    try{
        const {id} =req.params;
        const blog =await Blogs.findById(id)
        res.status(200).json(blog)
    }
    catch{
        res.status(400).json({msg :"sorry somthing went wrong"})
    }
    })

router.post("/blogs/:id/update",async (req,res)=>{
    try{
        const {id} =req.params;
        const {title,img,desc} =req.body;
        await Blogs.findByIdAndUpdate(id ,{title,img,desc})
        res.status(200).json({msg :"Blog is Updated sucessfully"})
    }
    catch(err){
        res.status(400).json({msg:"sorry somthing went wrong"})
    }
    })
router.delete("/blogs/:id/delete",async (req,res)=>{
    try{
        const  {id} =req.params;
        const updatedList =await Blogs.findByIdAndDelete(id)
        res.status(200).json(updatedList)
    }
    catch(err){
        res.status(400).json({msg:"Somthig went wrong"})
    }
})





module.exports =router