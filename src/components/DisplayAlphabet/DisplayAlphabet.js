import React, { Component } from "react";
import "./DisplayAlphabet.css";
import alphabet from "../../alphabet";

class DisplayAlphabet extends Component {
  // handleClick = e => {
  //   e.preventDefault();
  //   const letter = e.target.value.toLowerCase();

  //   this.props.updateGame(letter);
  // };

  render() {
    const alphabetList = this.props.lettersToGuess;
    const buttons = alphabetList.map(letter => (
      <button
        value={letter}
        className="letterButton"
        onClick={this.handleClick}
      >
        {letter}
      </button>
    ));

    return <div className="DisplayAlphabet">{buttons}</div>;
  }
}
export default DisplayAlphabet;
