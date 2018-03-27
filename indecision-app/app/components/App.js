import React from "react";
import { Header } from "./Header";
import { Action } from "./Action";
import { Options } from "./Options";
import { AddOption } from "./AddOption";
import img from "../assets/images/react_logo_512x512.png";

class IndecisionApp extends React.Component {
  //turn into arrow function to access this
  handleDeleteOptions = () => {
    // this.setState(() => {
    //   return {
    //     options:[]
    //   }
    // })
    this.state = {
      options: []
    };
    console.log(this.state.options);
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption = (option) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    this.state = {
      options: ["Thing one", "thing two", "thing four"]
    };

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
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
