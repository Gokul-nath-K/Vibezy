import React, { Component } from "react";

class Bike extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "Royal engine",
      colour: "Red",
      cc: 350,
      className: "paragraph",
    };
  }
  changeState = () => {
    this.setState({ Name: "KTM", colour: "Black" });
  };
  changetheme = () => {
    this.setState({ className : "paragraph-dark" });
  };
  render() {
    return (
      <div className={this.state.className}>
        <p> {this.state.Name} </p>
        <p> {this.state.colour} </p>
        <p> {this.state.cc} </p>
        <button onClick={this.changeState}> change state </button>
        <button onClick={this.changetheme}> dark mode </button>
      </div>
    );
  }
}

export default Bike;
