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
    return (
      <div className="WrongLetters">
        <h2>Incorrect Guesses: {this.getWrongLetters()}</h2>
      </div>
    );
  }
}

export default WrongLetters;
