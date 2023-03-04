import React from 'react';
//import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Products from '../routes/Products';

export default function CategoryCard({
    id,
    title,
    imageSource,
    description,
    productos
}) {
  // navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
      <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{
  bgcolor: 'background.paper',
  boxShadow: 24,
  marginTop: 5
}}>
    <Typography id="modal-modal-title" variant="h3" component="h4" textAlign='center'>
      «{title}» 
    </Typography>
    <Products productos={productos} />
  </Box>
</Modal>
      </CardActions>
    </Card>
  )
}
