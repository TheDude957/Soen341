import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "../CSS/ProductCard.css";
import { GetCurrentUserCart, RemoveItemFromCart } from "../firebaseService";

function CartProduct(props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {}, []);
  async function removeItem() {
    await RemoveItemFromCart(props.id);
    props.setProductsCart(await GetCurrentUserCart());
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
      <span className="quantity">Quantity</span>
      <TextField
        id="outlined-number"
        type="number"
        onChange={(number) => {
          setQuantity(!isNaN(number.target.value) ? number.target.value : "");
        }}
        value={quantity}
        size="small"
        // className="product-text quantity-box"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{ min: 1, inputMode: "numeric" }}
        // onkeydown="return false;"
      />

      <CardActions>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={removeItem}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartProduct;
