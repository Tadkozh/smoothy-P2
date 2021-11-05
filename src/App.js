import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage.jsx";
import ProductList from "./Components/ProductList/ProductList.jsx";
import Product from "./Components/Product/Product.jsx";
import OpenPage from "./Components/OpenPage/OpenPage.jsx";

const App = () => {

  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* <Route path="/OpenPage">
            <OpenPage />
          </Route> */}
          <Route 
            exact path="/ProductList/:product"
            component={ProductList}
          />
          <Route path="/Product">
            <Product />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
