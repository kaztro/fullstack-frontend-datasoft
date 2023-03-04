import React from 'react';
//import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CategoryCard({
    id,
    title,
    imageSource,
    description
}) {
  // navigate = useNavigate();
  const imgUrl = "http://localhost:8080/images/" + imageSource;
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={imgUrl}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Orden de categoria: {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver productos</Button>
      </CardActions>
    </Card>
  )
}
