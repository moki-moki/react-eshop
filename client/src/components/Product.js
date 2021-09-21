import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  media: {
    height: 340,
  },
});

export default function Product({
  imageUrl,
  name,
  price,
  description,
  productId,
}) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(productId, 1));
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="h5">
            Description:
            <Typography component="p">
              {description.substr(0, 100)}...
            </Typography>
          </Typography>
          <Box display="flex">
            <Typography component="h5">Price:</Typography>
            <Typography component="p">${price}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/product-details/${productId}`}>View</Link>
        <Button variant="outlined" onClick={addToCartHandler} color="secondary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
