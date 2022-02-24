import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bert from "../Images/bert_n_ernie_socks.jpg"


function ProductCard(props) {
  
 

  return (

     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image = {require ("../Images/bert_n_ernie_socks.jpg")}
        alt="bert and ernie"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.price}</Button>
        <Button size="small">{props.category}</Button>
      </CardActions>
    </Card>
      
      
      );
}

export default ProductCard;


