const mongoose =require("mongoose")


const blogSchema = new mongoose.Schema({
    title :{
        type:String
    },
    desc :{
        type :String
    },
    img:{
        type:String
    }
})

module.exports = mongoose.model("Blog" ,blogSchema)