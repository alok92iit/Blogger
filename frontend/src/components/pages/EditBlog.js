import axios from 'axios';
import React,{useState,useRef,useEffect} from 'react';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useParams,useNavigate } from 'react-router-dom';
import "./NewBlog.css"
const EditBlog = () => {
    const params =useParams()
    const navigate =useNavigate()
    const titleInputRef =useRef()
    const imgInputRef   =useRef()
    const descInputRef  =useRef()
    const [blog ,setBlog] =useState({
        title:"",
        img:"",
        desc:""
    })
    const getBlog =async ()=>{
        const res =await axios.get(`http://localhost:8080/blogs/${params.id}`)    
            setBlog(res.data)
    }
    const updateBlog =async (e)=>{
        e.preventDefault();
        const title =titleInputRef.current.value;
        const img   =imgInputRef.current.value;
        const desc =descInputRef.current.value;
         await axios.post(`http://localhost:8080/blogs/${params.id}/update`,{title, img,desc})
        navigate('/')
    }
    useEffect(()=>{
            getBlog()
    },[])

  return <React.Fragment>
  <Container maxWidth="sm">
              <div>
                  <label htmlFor="title">Title</label>
              <input type="text" id="title" placeholder="title" ref={ titleInputRef} defaultValue={blog.title}></input>
              </div>
              <div>
                  <label htmlFor="img">Image Url</label>
              <input type="text" id="img" placeholder="Image Url" ref={imgInputRef} defaultValue={blog.img}></input>
              </div>
              <div>
                  <label htmlFor="desc">Blog</label>
                  <textarea cols={20} rows={3} ref={descInputRef} defaultValue={blog.desc}></textarea>
              </div>

  <Button onClick={updateBlog} variant="contained">Update</Button>
  </Container>
</React.Fragment>;
};

export default EditBlog;
