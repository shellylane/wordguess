import React, { Component } from "react";
import "./WrongLetters.css";

class WrongLetters extends Component {
  getWrongLetters() {
    const wrong = this.props.guessedLetters.filter(letter => {
      return !this.props.word.split("").includes(letter);
    });
    return wrong;
  }

  render() {
    return <div className="WrongLetters">{this.getWrongLetters()}</div>;
  }
}

export default WrongLetters;
