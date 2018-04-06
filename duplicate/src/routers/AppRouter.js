import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { Portfolio } from "../components/Portfolio";
import { Home } from "../components/Home";
// import { Contact } from "../components/Contact";
// import { ProjOne } from "../components/ProjOne";
// import { ProjTwo } from "../components/ProjTwo";

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active">
      Portfolio
    </NavLink>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
