import React, { Component } from "react";

export class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      value: '',
    };
  }
  handleAddOption = e => {
    e.preventDefault();

    const option = this.state.value.trim();

    const result = this.props.addOption(option);
    if (result.error) {
      this.setState({ error: result.error });
    }

    this.setState({
      value: ''
    })
  };


  onChange=(e)=>{
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <div>
        {this.state.error && <p className = "add-option-error">{this.state.error}</p>}
        <form 
          onSubmit={this.handleAddOption}
          className = "add-option"
        >
          <input type="text" name="option" 
            value={this.state.value} 
            onChange={this.onChange} 
            className = "add-option__input"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}
