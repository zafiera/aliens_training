import React, { Component } from 'react';
import { Option } from './Option';

export class Options extends Component {
  //turn into arrow function to access this
  handleRemoveAll = (e) => {
    // alert("handleRemoveAll");
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}
