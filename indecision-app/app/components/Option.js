import React, { Component } from 'react';

export class Option extends Component {

  render() {
    return (
      <div className = "option option__text"> 
      <p>{this.props.count}. 
      {this.props.optionText}</p>
        <button 
          onClick={(e) =>{
            this.props.handleDeleteOption(this.props.optionText)
          }}
          className = "button button--link"
        >
          remove
        </button>
      </div>
      
    )
  }
}
