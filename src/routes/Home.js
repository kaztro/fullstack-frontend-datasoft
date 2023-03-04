import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2';

import CategoryCard from '../components/CategoryCard';
import { Container } from '@mui/system';

export default function Home() {
  
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    loadCategorias();
  }, []);

  const loadCategorias = async () => {
    const result = await axios.get("http://localhost:8080/categorias");
    setCategorias(result.data);
  }
  return (
    <Container fixed>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }} columnSpacing={-60} style={{marginTop: '0.25em'}}>
        {
          categorias.map(card => (
            <Grid xs={2} sm={2} md={4} key={card.cat_id}>
              <CategoryCard id={card.cat_id} title={card.cat_nombre} imageSource={card.cat_imagen} 
                description={card.cat_orden} productos={card.productos} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
