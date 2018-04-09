import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import { ProjOne } from "../components/ProjOne";
import { ProjTwo } from "../components/ProjTwo";

const projects = () =>(
    <header>
        <h3>Here are my projects</h3>
        <NavLink to= "/project1" activeClassName="is-active">
            Project One
        </NavLink>
        <NavLink to="/project2" activeClassName="is-active">
            Project Two
        </NavLink>
    </header>
)

const ProjectRouter = () =>(
    <BrowserRouter>
        <div>
            <projects/>
            <Switch>
                <Route path = "/project1" component = {ProjOne}/>
                <Route path = "project2" component = {ProjTwo}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default ProjectRouter;