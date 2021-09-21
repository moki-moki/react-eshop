import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const NotFound = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography variant="h1" component="h1">
        404 Not Found
      </Typography>
      <Typography variant="h3" component="h3">
        Go back <Link to="/"> here</Link>
      </Typography>
    </Box>
  );
};

export default NotFound;
