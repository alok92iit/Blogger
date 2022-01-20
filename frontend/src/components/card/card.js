import React  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./card.css"
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function MultiActionAreaCard(props) {
    const navigate = useNavigate();
    function showBlog(id){
        navigate(`/blogs/${id}`)
    }

    function updateBlog(id){
      navigate(`/blogs/${id}/update`)
    }
    const deleteBlog =async ()=>{
     
          const response =await axios.delete(`http://localhost:8080/blogs/${props.id}/delete`)
          console.log(response.data)
          props.deleteBlog([response.data]) 
          navigate('/')
          
      
                
}

  return (
    <Card className= "mtcard" sx={{ maxWidth: 345}}>
      <CardActionArea  onClick={()=>showBlog(props.id)}>
        <CardMedia
          component="img"
          height="200"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{height:90}}>
            {props.title.substring(0,50)}...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc.substring(0,130)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{margin :0}}> 
        <Button onClick={()=>updateBlog(props.id)} size="small" color="primary">
          Edit
        </Button>
        <Button onClick={deleteBlog} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}