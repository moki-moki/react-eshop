import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "5em",
    position: "sticky",
    zIndex: "3",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    fontSize: "1.5rem",
    padding: "0.5rem",
    borderRadius: "10px",
    background: "#30323a",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1rem",
    },
  },
}));

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navbar() {
  const classes = useStyles();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () =>
    cartItems.reduce((qty, item) => qty + Number(item.qty), 0);

  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar color="secondary">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              E-Shop
            </Typography>
            <Link
              style={{ marginRight: "1em" }}
              className={classes.navbar}
              to="/cart"
            >
              Cart <span className="cartSpan"> {getCartCount()}</span>
            </Link>
            <Link className={classes.navbar} to="/">
              Shop
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
}
