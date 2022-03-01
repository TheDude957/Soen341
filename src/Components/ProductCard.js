import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../CSS/ProductCard.css";
function ProductCard(props) {
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
        <Button color="primary" variant="contained" fullWidth>
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
