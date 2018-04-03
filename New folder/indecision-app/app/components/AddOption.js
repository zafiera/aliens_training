import React, { Component } from "react";

export class AddOption extends Component {
  handleAddOption = e => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      this.props.handleAddOption(option);
      e.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}