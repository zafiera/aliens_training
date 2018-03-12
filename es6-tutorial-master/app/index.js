import React, { Component } from "react";
import ReactDOM from "react-dom";

const api_key = "b44148761c5cc270134e947a6b927804";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Cape Town"
    };
  }

  componentDidMount() {
    this.grabWeather(this.state.city);
  }

  grabWeather(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`
    ).then(response => response.json())
    .then(json => {
      this.setState({description: json.weather[0].des})
    });
  }
  render() {
    return <div><h1> Weather Report for {this.state.city}! </h1></div> ;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
