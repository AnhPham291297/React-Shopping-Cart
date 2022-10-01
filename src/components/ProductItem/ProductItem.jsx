// import "./products.css";
import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const useStyles = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    root: {
      maxWidth: "100%",
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    cardActions: {
      display: "flex",
      justifyContent: "space-between",
    },
    cardContent: {
      display: "flex",
      justifyContent: "space-between",
      textTransform: 'capitalize'
    },
  };
});

const ProductItem = ({ product, addProduct }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.image} title={product.title} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            ${(product.price/1000).toFixed(2)}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.category }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <NavLink to={`/products/${product.id}`}>
          <IconButton aria-label="View Product">
            <VisibilityIcon />
          </IconButton>
        </NavLink>
        <IconButton aria-label="Add to Cart" onClick={() => addProduct(product)}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductItem


