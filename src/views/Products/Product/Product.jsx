import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/action";
import "./product.css";
import Announcement from "../../../components/Announcement/Announcement";
import Layout from "../../../components/Layout/Layout";
import { Box, Container, Grid, Typography, Rating, Button } from "@mui/material";
import useStyles from "./styles";
import LinkMui from "../../../components/Link";

export default function Product() {
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api-shop-1.herokuapp.com/shop/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  // console.log(product);

  return (
    <>
      <Announcement />
      <Layout>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <Container maxWidth='lg' className={classes.productContainer}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <img src={product.image} alt="" className={classes.image} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" component='h1' className={classes.name}>{product.name}</Typography>
                <Rating size="small" name="read-only" value={4} sx={{ marginBottom: '10px' }} readOnly />
                <Box>
                  <Typography variant="caption" >Design By: {product.company} company</Typography>
                  <br />
                  <Typography variant="caption" >Caterogy: {product.category}</Typography>
                </Box>
                <Typography variant='h6' className={classes.details} >Details: </Typography>
                <Typography variant="subtite1" component='p' className={classes.description}>{product.description}</Typography>
                <Typography variant="h5" component='p' className={classes.price}>${(product.price/1000).toFixed(2)}</Typography>
                <Box className={classes.productBtn}>
                  <Button variant="contained" onClick={() => addProduct(product)}>Add To Cart</Button>
                  <Button variant="outlined">
                    <LinkMui to='/products' sx={{ color: '#1976d2' }}>Go To Products</LinkMui>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        )}
      </Layout>
    </>
  );
}
