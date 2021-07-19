import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import FilterPage from "./pages/FilterPage";
import Footer from "./components/Footer";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/anime" exact>
            <FilterPage />
          </Route>
          <Route path="/anime/details/:id">
            <Details />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export { App };
