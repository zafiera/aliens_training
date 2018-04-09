import React, { Component} from 'react';
import { NavLink } from "react-router-dom";

export class Portfolio extends Component{
    render(){
        return(
            <div>
                <p>Portfolio and what I worked on</p>
                <header>
                <h3>Here are my projects</h3>
                <NavLink to= "/project1" activeClassName="is-active">
                    Project One
                </NavLink>
                <NavLink to="/project2" activeClassName="is-active">
                    Project Two
                </NavLink>
            </header>
            </div>
        )
    }
}
