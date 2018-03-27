'use strict';
import React from "react";
import { Header } from "./Header";
import { Action } from "./Action";
import { Options } from "./Options";
import { AddOption } from "./AddOption";
import img from "../assets/images/react_logo_512x512.png";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: []
    };
  }

  //turn into arrow function to access this
  handleDeleteOptions = () => {

    this.setState({
      options: []
    }, () => {
      console.log(this.state.options);
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption = (option) => {
    this.setState({
      options: this.state.options.concat(option),
    });
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header title={this.state.title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

export default IndecisionApp;
