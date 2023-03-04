import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';

import ProductCard from '../components/ProductCard';
import { Container } from '@mui/system';

export default function Products({productos}) {
    return (
      <Container fixed>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }} columnSpacing={-60} style={{marginTop: '0.25em'}}>
          {
            productos.map(card => (
              <Grid xs={2} sm={2} md={4} key={card.prd_id}>
                <ProductCard id={card.prd_id} title={card.prd_nombre} imageSource={card.prd_imagen} 
                  description={card.prd_descripcion} precio={card.prd_precio}/>
              </Grid>
            ))}
        </Grid>
      </Container>
    );
}
