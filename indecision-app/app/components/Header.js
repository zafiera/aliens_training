import React, { Component } from 'react';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title + 'hello',
    };
    console.log(props.title);
  }
  render() {
    console.log('render header');

    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
