import React,{useState,useEffect} from 'react'
import MultiActionAreaCard from "../card/card"
import "./AllBlogs.css"
import axios from 'axios'



const AllBlogs = () => {

    const [blogs,setblog] =useState([])
    async function getAllBlog(){
        try{
            const response =await axios.get("http://localhost:8080/blogs")
            setblog(response.data)
        }
        catch(err){
            console.log(err)
        }
    }
    function deleteBlog(blogs){
    setblog(blogs)
    }
 useEffect(()=>{
    getAllBlog()
},[blogs])

    return (<div>
        <div className='imgBlock'>
            <img src="https://source.unsplash.com/random" alt="main image description"/>
                <div>
                    <h4>Title of a longer featured blog post</h4>
                    <p >Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                    <a href="#">Continue reading…</a>
                </div>
            
        </div>
    
    
            <div className='blogs'>
                    {
                        blogs.map((blog)=>{
                        return <MultiActionAreaCard
                                key ={blog._id}
                                id ={blog._id}
                                title ={blog.title}
                                desc ={blog.desc}
                                img ={blog.img}
                                deleteBlog ={deleteBlog}
                        />
                        })
                    }
                </div>
    </div>
    )    
}


export default AllBlogs
