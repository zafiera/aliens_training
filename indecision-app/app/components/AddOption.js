import React, { Component } from 'react';

export class AddOption extends Component {
  handleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      app.options.push(option);
      e.target.elements.option.value='';
      render();
    }

    const onRemoveAll= () =>{
      app.options = [];
      render();
    }
  }
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
