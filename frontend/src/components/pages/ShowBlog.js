import React,{useState,useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ShowBlog = () => {
  
    const params =useParams()
    const [blog ,setBlog] =useState({
        title:'',
        desc:'',
        img :''
    })
    async function fetchBlog(){
        const response =await axios.get(`http://localhost:8080/blogs/${params.id}`)
        const {title ,desc ,img} =response.data
        setBlog({title,desc,img})
    }
    useEffect(()=>{
    fetchBlog()
    },[] )
  return <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <img src={blog.img} style={{width:"100%" ,marginTop :20}}/>
      <h2>{blog.title}</h2>
      <p>{blog.desc}</p>
    </Container>
  </React.Fragment>
};

export default ShowBlog;
