import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <h1 className="header__title">{this.props.title}</h1>
          <h2 className="header__subtitle">{this.props.subtitle}</h2>
        </div>
      </div>
    );
  }
}
