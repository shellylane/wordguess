import React, { Component } from "react";
import "./DisplayWord.css";

class DisplayWord extends Component {
  render() {
    const wordLetters = this.props.word.split("");
    const answer = wordLetters.map(letter => {
      let letterState = "_";
      if (this.props.guessedLetters.includes(letter)) {
        letterState = letter;
      }
      return letterState + " ";
    });

    return (
      <div className="DisplayWord">
        <h3>{answer}</h3>
      </div>
    );
  }
}

export default DisplayWord;
