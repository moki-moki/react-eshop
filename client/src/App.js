import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingLayout from "./components/LandingLayout";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingLayout} />
          <Route path="/cart" component={Cart} />
          <Route path="/product-details/:id" component={ProductDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
