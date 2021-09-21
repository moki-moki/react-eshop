import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  boxOne: {
    width: "35%",
    [theme.breakpoints.down("md")]: {
      margin: "1em",
      width: "80%",
    },
  },
  paperOne: {
    padding: "1em",
    marginRight: "1em",
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
      marginLeft: "0",
    },
  },
  boxTwo: {
    width: "25%",

    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  spacing: {
    marginBottom: "0.4em",
  },
}));

const ProductDetail = ({ match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
  };

  const classes = useStyles();

  return (
    <>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Box className={classes.root}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="productImg"
          />

          <Box className={classes.boxOne}>
            <Paper className={classes.paperOne}>
              <Typography
                className={classes.spacing}
                variant="h5"
                component="h5"
              >
                {product.name}
              </Typography>
              <Typography className={classes.spacing} component="p">
                Price: ${product.price}
              </Typography>

              <Typography className={classes.spacing} component="p">
                Description: {product.description}
              </Typography>
            </Paper>
          </Box>
          <Box className={classes.boxTwo}>
            <Paper className={classes.paperOne} elevation={3}>
              <Typography
                variant="h5"
                component="h5"
                className={classes.spacing}
              >
                Price: ${product.price}
              </Typography>
              <Typography component="p" className={classes.spacing}>
                Status: {product.inStock > 0 ? "In stock" : "Out Of Stock"}{" "}
              </Typography>
              <Typography component="p" className={classes.spacing}>
                Qty:
                <select
                  className="select"
                  value={product.qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.inStock).keys()].map((v) => (
                    <option key={v + 1} value={v + 1}>
                      {v + 1}
                    </option>
                  ))}
                </select>
              </Typography>
              <Button
                onClick={addToCartHandler}
                variant="outlined"
                color="secondary"
              >
                Add To Cart
              </Button>
            </Paper>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductDetail;
