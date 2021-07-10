import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export { App };
