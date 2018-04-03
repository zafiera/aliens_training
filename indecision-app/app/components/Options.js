import React, { Component } from "react";
import { Option } from "./Option";

export class Options extends Component {
  //turn into arrow function to access this
  render() {
    return (
      <div>
        <div className="widget-header">
        <h3 className = "widget-header__title">Your Options</h3>
          <button
            onClick={this.props.handleDeleteOptions}
            className="button button--link"
          >
            Remove all
          </button>
        </div>
        {this.props.options.map((option, index) => (
          <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={this.props.handleDeleteOption}
          />
        ))}
        {this.props.options.length === 0 && <p className = "widget__message">Please enter an option</p>}
      </div>
    );
  }
}
