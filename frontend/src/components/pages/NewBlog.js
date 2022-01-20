import React,{useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import axios from 'axios';
import "./NewBlog.css"

const NewBlog = () => {
  const titleInputRef =useRef()
  const imgInputRef = useRef()
  const descInputRef =useRef()

  const navigate =useNavigate()

 const addBlog= async(e)=>{
   e.preventDefault();
   const title =titleInputRef.current.value;
   const img   =imgInputRef.current.value;
   const desc =descInputRef.current.value;
   try{ 

        const response= await axios.post("http://localhost:8080/blogs",{title, img,desc})
        console.log(response)
        navigate('/')
   }
   catch(err){
     console.log("can not upload blog")
   }
}

    return<React.Fragment>
    <Container maxWidth="sm">
                <div>
                    <label htmlFor="title">Title</label>
                <input type="text" id="title" placeholder="title" ref={ titleInputRef}/>
                </div>
                <div>
                    <label htmlFor="img">Image Url</label>
                <input type="text" id="img" placeholder="Image Url" ref={imgInputRef}/>
                </div>
                <div>
                    <label htmlFor="desc">Blog</label>
                    <textarea cols={20} rows={3} ref={descInputRef}></textarea>
                </div>
  
    <Button onClick={addBlog} variant="contained">Submit</Button>
    </Container>
  </React.Fragment>
    
}

export default NewBlog
