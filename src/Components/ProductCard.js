import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../CSS/ProductCard.css";
import { AddItemToCart } from "../firebaseService";
function ProductCard(props) {
  /**
   * Function to add an item to the Cart
   * Returns a product with all the information
   * Styling is provided to make it look as a Card
   */
  function addToLocalStorage(){ 
     let prev = JSON.parse(localStorage.getItem('cart'));
      if(prev == null) prev = [];
      prev.push(props);
      localStorage.setItem("cart",JSON.stringify(prev));
     
      localStorage.setItem("cart",JSON.stringify(prev));
     
      
     }


     /**
      * adds product to locaSrorage
      * notifies commponent above it about cart state change
      * adds item to user cart if logged in
      */
  async function addToCart() {

    addToLocalStorage();
    props.notify(1);
    await AddItemToCart(props.id);

  }

  return (
    <Card className="product">
      <CardMedia
        component="img"
        className="product-img"
        image={props.picture}
        alt={props.name}
      />
      <CardContent style={{ padding: 0, paddingTop: 3 }}>
        <Typography className="product-text title">{props.name}</Typography>
        <Typography className="product-text description">
          {props.description}
        </Typography>
        <Typography className="product-text price">${props.price}</Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={addToCart}
        >
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
