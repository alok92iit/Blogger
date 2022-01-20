const express= require("express")
const app =express()
const mongoose =require("mongoose")
const seedData =require("./seed")
const cors =require("cors")

mongoose.connect('mongodb://localhost:27017/Blogs')
.then(()=>{
    
    console.log("connect established")
}).catch((err)=>{
    console.log(err)
});
//Seed data to the database
//seedData()
app.use(cors())
app.use(express.json())
// Routes
const blog =require("./apis/blogs")
app.use(blog)


app.get("/home",(req,res)=>{
    res.status(200).json({msg :"hello everybuddy"})
})









app.listen(8080,()=>{
    console.log("server runing at port 8080")
})