import { useEffect } from "react";
import Product from "./Product";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listOfProducts } from "../redux/actions/productAction";

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
}));

const LandingLayout = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading } = getProducts;

  useEffect(() => {
    dispatch(listOfProducts());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Shop Items</h1>
      <div className="layout">
        <div style={{ margin: "1em" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {(loading ? Array.from(new Array(10)) : products).map(
              (product, idx) => (
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
              )
            )}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default LandingLayout;
