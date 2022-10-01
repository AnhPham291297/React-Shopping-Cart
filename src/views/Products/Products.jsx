// import "./products.css";
import React, { useState, useEffect } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import Layout from "../../components/Layout/Layout";

import useStyles from "./styles";
import { Box, CircularProgress, Grid } from "@mui/material";
import Announcement from "../../components/Announcement/Announcement";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const dispatch = useDispatch();
  const addProduct = (product) => {
    console.log('addProduct');
    dispatch(addCart(product));
  };

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const res = await fetch('https://api-shop-1.herokuapp.com/shop');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Announcement />
      <Layout>
        {loading ? (
          // <p style={{ textAlign: "center" }}>Loading ...</p>
          <Box sx={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          <>
            <main className={classes.content}>
              <div className={classes.toolbar}>
                <Grid container justifyContent='center' spacing={4}>
                  {products?.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                      <ProductItem addProduct={addProduct} product={product} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </main>
          </>
        )}
      </Layout>
    </>

  );
}


