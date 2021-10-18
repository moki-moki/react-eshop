import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listOfProducts } from "../redux/actions/productAction";
import Product from "./Product";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import LandingHeading from "./LandingHeading";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  skeleton: {
    width: 290,
    height: 340,
    [theme.breakpoints.down("lg")]: {
      width: 220,
    },
  },
  skeletonLineOne: {
    width: 260,
    [theme.breakpoints.down("lg")]: {
      width: 190,
    },
  },
  skeletonLineTwo: {
    width: 240,
    [theme.breakpoints.down("lg")]: {
      width: 160,
    },
  },
  FormControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  label: {
    color: "#fff",
  },
  selectBox: {
    margin: "1em 1em 0 1em",
  },
}));

const LandingLayout = () => {
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading } = getProducts;

  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(listOfProducts());
  }, [dispatch, filter]);
  const classes = useStyles();

  return (
    <>
      <LandingHeading />
      <h1 style={{ textAlign: "center" }}>Shop Items</h1>
      <div id="shop" className="layout">
        <Box className={classes.selectBox}>
          <FormControl className={classes.FormControl}>
            <InputLabel className={classes.label}>Category:</InputLabel>
            <Select defaultValue="" onChange={handleSelect}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="tech">Tech</MenuItem>
              <MenuItem value="house accessorie">House</MenuItem>
              <MenuItem value="furniture">Furniture</MenuItem>
              <MenuItem value="ride">Ride</MenuItem>
              <MenuItem value="random">Random</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div style={{ margin: "1em" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {(loading
              ? Array.from(new Array(19))
              : products.filter((item) => {
                  if (filter === "") {
                    return item;
                  } else if (item.cat === filter) {
                    return item;
                  }
                })
            ).map((product, idx) => (
              <Grid key={idx} item xm={12} sm={6} md={3}>
                {product ? (
                  <Product
                    productId={product._id}
                    key={product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    imageUrl={product.imageUrl}
                  />
                ) : (
                  <Box>
                    <Skeleton
                      className={classes.skeleton}
                      variant="rect"
                      animation="wave"
                    />
                    <Skeleton
                      className={classes.skeletonLineOne}
                      animation="wave"
                    />
                    <Skeleton
                      className={classes.skeletonLineTwo}
                      animation="wave"
                    />
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default LandingLayout;
