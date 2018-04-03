import React, { Component } from 'react';

export class Action extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}
        disabled={!this.props.hasOptions}
        >What should I buy? </button>
      </div>
    );
  }
}
