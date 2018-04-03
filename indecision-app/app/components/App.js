"use strict";
import React from "react";
import { Header } from "./Header";
import { Action } from "./Action";
import { Options } from "./Options";
import { AddOption } from "./AddOption";
import { OptionModal } from "./OptionModal";
import img from "../assets/images/react_logo_512x512.png";
import "../assets/scss/main.scss";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState({
          options
        });
      }
    } catch (e) {
      //catch
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //turn into arrow function to access this
  handleDeleteOptions = () => {
    this.setState({
      options: []
    });
  };

  handleDeleteOption = optionToRemove => {
    this.setState({
      options: this.state.options.filter(option => {
        return optionToRemove !== option;
      })
    });

    return false;
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState({
      selectedOption: option
    });
  };

  handleClearSelectedOption = () => {
    this.setState({
      selectedOption: undefined
    });
  };

  addOption = option => {
    if (!option) {
      return {
        error: "no option has been entered"
      };
    }
    if (this.state.options.indexOf(option) > -1) {
      return {
        error: "option already exists"
      };
    }

    this.setState({
      options: this.state.options.concat(option)
    });

    return {
      error: false
    };
  };

  render() {
    const subtitle = "Put your life in the hands of a computer";
    const title = "Indecision";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className = "widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption addOption={this.addOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
export default IndecisionApp;
