import React from 'react';
import { Header } from './Header';
import { Action } from './Action';
import { Options } from './Options';
import { AddOption } from './AddOption';
import img from '../assets/images/react_logo_512x512.png';

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "thing two", "thing four"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

export default IndecisionApp;
