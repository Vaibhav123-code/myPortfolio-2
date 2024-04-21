import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import './styles.css'

export default function ProjectCard({project}) {
  return (
   <div className='card-wrapper'>
    <a href={`/projects/${project.title}`}>
    <Card className='card'>
      <CardMedia
       className='card-media'
        image={project.image}
      />
      <CardContent>
        <div className='card-title' >
          {project.title}
        </div>
        <div className='card-desc' variant="body2" color="text.secondary">
           {project.description.slice(0,200)+ "     "}
           <span style={{"color":"grey","fontWeight":400}}> ...Learn More</span>
        </div>
      </CardContent>
      <CardActions>
        <Button size="large" >Live Demo</Button>
        <Button size="large" >Learn More</Button>
      </CardActions>
    </Card>
    </a>
    </div>
  );
}