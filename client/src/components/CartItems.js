import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  boxOne: {
    background: "#2f3038",
    margin: "1em",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "1em",
  },
  title: {
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  font: {
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
}));

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const classes = useStyles();
  return (
    <Box className={classes.boxOne} key={item._id}>
      <img src={item.imageUrl} alt={item.name} className="image" />
      <Typography className={classes.title} variant="h5" component="h3">
        <Link to={`/product-details/${item.product}`}>{item.name}</Link>
      </Typography>
      <Typography className={classes.font} component="p">
        ${item.price}
      </Typography>
      <select
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        value={item.qty}
        className="select"
      >
        {[...Array(item.countInStock).keys()].map((i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <Button
        className={classes.font}
        onClick={() => removeHandler(item.product)}
        color="secondary"
      >
        Remove
      </Button>
    </Box>
  );
};

export default CartItem;
