import { Component } from 'react';

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "thing two", "thing four"];

    return React.createElement(
      "div",
      null,
      React.createElement(Header, { title: title, subtitle: subtitle }),
      React.createElement(Action, null),
      React.createElement(Options, { options: options }),
      React.createElement(AddOption, null)
    );
  }
}

class Header extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        this.props.title
      ),
      React.createElement(
        "h2",
        null,
        this.props.subtitle
      )
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: this.handlePick },
        "What should I buy?"
      )
    );
  }
}

class Options extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleRemoveAll = e => {
      // alert("handleRemoveAll");
      console.log('x', this.props.options);
    }, _temp;
  }
  // constructor(props){
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }


  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: e => this.handleRemoveAll(e) },
        "Remove all"
      ),
      this.props.options.map(option => React.createElement(Option, { key: option, optionText: option }))
    );
  }
}

class Option extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      this.props.optionText
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(handleAddOption);
    }
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        { onSubmit: this.handleAddOption },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add Option"
        )
      )
    );
  }
}
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
import { Component } from 'react';

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "thing two", "thing four"];

    return React.createElement(
      "div",
      null,
      React.createElement(Header, { title: title, subtitle: subtitle }),
      React.createElement(Action, null),
      React.createElement(Options, { options: options }),
      React.createElement(AddOption, null)
    );
  }
}

class Header extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        this.props.title
      ),
      React.createElement(
        "h2",
        null,
        this.props.subtitle
      )
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: this.handlePick },
        "What should I buy?"
      )
    );
  }
}

class Options extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleRemoveAll = e => {
      // alert("handleRemoveAll");
      console.log('x', this.props.options);
    }, _temp;
  }
  // constructor(props){
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }


  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "button",
        { onClick: e => this.handleRemoveAll(e) },
        "Remove all"
      ),
      this.props.options.map(option => React.createElement(Option, { key: option, optionText: option }))
    );
  }
}

class Option extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      this.props.optionText
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(handleAddOption);
    }
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        { onSubmit: this.handleAddOption },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add Option"
        )
      )
    );
  }
}
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
