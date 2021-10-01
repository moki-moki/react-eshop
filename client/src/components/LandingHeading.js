import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import Summer from "./images/Summer.jsx";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  textContainer: {
    margin: "2em",
  },
  text: {
    fontSize: "1.5em",
    padding: "1em 0",
  },
  imageContainer: {
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
}));

const LandingHeading = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.container}>
          <Box className={classes.textContainer}>
            <Typography variant="h1" component="h2">
              Welcome to E-Shop!
            </Typography>
            <Typography className={classes.text} component="p">
              All <span style={{ color: "#FF6584" }}>SUMMER</span> items are on
              sale 50%!
            </Typography>
            <Button variant="outlined" color="primary">
              <a href="#shop">Shop Now</a>
            </Button>
          </Box>
          <Summer />
        </Box>
      </Box>
    </>
  );
};

export default LandingHeading;
