import React from 'react'
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function ProductCard({
    id,
    title,
    imageSource,
    description,
    precio
}) {
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
          {title} | {precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
