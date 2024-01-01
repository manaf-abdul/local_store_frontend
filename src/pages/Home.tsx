import React, { useState } from 'react'
import ProductCard from '../components/Card'
import { PRODUCTS } from '../data/product'
import { Grid } from '@mui/material'
import ProductModal from '../components/Modal'

const Home = () => {

  const [selected, setSelected] = useState<any>('')
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const productViewhandler = (productId:any) => {
    console.log("here");
    setSelected(productId)
    handleOpen()

  }




  return (
    <>
      <h1>Home</h1>
      <Grid container spacing={2} alignContent={"center"}>
        <ProductModal
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          product={selected}
        />
        {PRODUCTS.map(product => (
          <Grid key={product.id} item xs={12} sm={6} md={3} alignContent={"center"} onClick={()=>productViewhandler(product.id)}>
            <ProductCard
              title={product.title}
              image={product.image}
              description={product.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Home