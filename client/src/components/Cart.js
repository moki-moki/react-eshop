import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CartItems from "./CartItems";
import { makeStyles } from "@material-ui/styles";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  boxTwo: {
    background: "#2f3038",
    width: "25%",
    maxHeight: "20vh",
    marginRight: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginRight: "0",
    },
  },

  cartItems: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  checkOut: {
    margin: "1em",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
}));

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const classes = useStyles();

  const getCartCount = () =>
    cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);

  const getCartTotalPrice = () =>
    cartItems.reduce((price, item) => item.price * item.qty + price, 0);

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.cartItems}>
          {cartItems.length === 0 ? (
            <Typography component="p">
              You're cart is empty. Return <Link to="/">here</Link>
            </Typography>
          ) : (
            cartItems.map((item) => (
              <CartItems
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
              />
            ))
          )}
        </Box>
        <Box className={classes.boxTwo}>
          <Typography className={classes.checkOut} component="h3">
            Total Items {getCartCount()}
          </Typography>
          <Typography className={classes.checkOut} component="h5">
            Total Cost: ${getCartTotalPrice()}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
