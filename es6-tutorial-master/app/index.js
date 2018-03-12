import React, { Component } from "react";
import ReactDOM from "react-dom";

const api_key = "b44148761c5cc270134e947a6b927804";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "San Francisco"
    };
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`
    ).then(response => response.json())
    .then(json => console.log(json));
  }
  render() {
    return <div> ReactJS and JSX in action</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
