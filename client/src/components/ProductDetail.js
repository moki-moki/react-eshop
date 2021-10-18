import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../redux/actions/productAction";
import { addToCart } from "../redux/actions/cartAction";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

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
    width: "65%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  paperOne: {
    padding: "1em",
    marginRight: "1em",
    marginLeft: "1em",
    [theme.breakpoints.down("md")]: {
      margin: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
      marginLeft: "0",
    },
  },
  desc: {
    margin: "0.4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  boxTwo: {
    width: "25%",

    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  label: {
    color: "#fff",
  },
  spacing: {
    margin: "0.4rem",
  },
  FormControl: {
    margin: theme.spacing(1),
    minWidth: 120,
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

  const handleChange = (e) => {
    setQty(e.target.value);
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
          <Box className={classes.boxOne}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="productImg"
            />
            <Paper className={classes.paperOne}>
              <Typography
                className={classes.spacing}
                variant="h5"
                component="h5"
              >
                {product.name}
              </Typography>
              <Typography className={classes.spacing} component="p">
                <span style={{ color: "#ceab21" }}>Price</span>: $
                {product.price}
              </Typography>
              <Typography className={classes.desc} component="p">
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
              <FormControl className={classes.FormControl}>
                <InputLabel className={classes.label} id="qty-label">
                  Qty
                </InputLabel>
                <Select
                  labelId="qty-label"
                  id="qty-id"
                  value={qty}
                  onChange={handleChange}
                >
                  {[...Array(product.inStock).keys()].map((v) => (
                    <MenuItem key={v + 1} value={v + 1}>
                      {v + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                onClick={addToCartHandler}
                variant="outlined"
                color="secondary"
                className={classes.spacing}
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
