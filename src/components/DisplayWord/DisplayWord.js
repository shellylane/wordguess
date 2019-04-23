import React, { Component } from "react";
import "./DisplayWord.css";

class DisplayWord extends Component {
  render() {
    const wordLetters = this.props.word.split("");
    const answer = wordLetters.map(letter => {
      let letterState = "__";
      if (this.props.guessedLetters.includes(letter)) {
        letterState = letter;
      }
      return letterState + " ";
    });

    return (
      <div className="DisplayWord">
        <h1>{answer}</h1>
      </div>
    );
  }
}

export default DisplayWord;
