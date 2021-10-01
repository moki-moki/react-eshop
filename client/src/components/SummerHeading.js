import { Box, Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "0.5rem",
    },
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    padding: "2em",
  },
  boxTwo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "2em 0",
  },
  text: {
    fontSize: "1.5em",
    padding: "1em 0",
  },
}));

const SummerHeading = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.heading}>
          <Typography variant="h2" component="h3">
            Welcome to the shop!
          </Typography>
          <Box className={classes.boxTwo}>
            <Typography className={classes.text} variant="p" component="p">
              We have <span style={{ color: "#FF6584" }}>SUMMER</span> suff on
              sale 50%!
            </Typography>
            <Button color="secondary" variant="outlined">
              Shop now!
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SummerHeading;
