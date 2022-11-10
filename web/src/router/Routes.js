import React from "react";
import LightProfessionalAnimation from "../views/all-home-version/LightProfessionalAnimation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={LightProfessionalAnimation} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
