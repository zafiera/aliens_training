import React, { Component } from 'react';

export class Action extends Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I buy?</button>
      </div>
    );
  }
}
