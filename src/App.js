import React, { Component } from "react";
import "./App.css";
import words from "./words";
import alphabet from "./alphabet";
import DisplayWord from "./components/DisplayWord/DisplayWord";
import WrongLetters from "./components/WrongLetters/WrongLetters";
import DisplayAlphabet from "./components/DisplayAlphabet/DisplayAlphabet";

class App extends Component {
  state = {
    word: words[Math.floor(Math.random() * words.length)],
    guessedLetters: [],
    guessesRemaining: 10,
    lettersToGuess: alphabet
  };
  handleClick = e => {
    e.preventDefault();
    const letter = e.target.value.toLowerCase();

    this.props.updateGame(letter);
  };
  updateGuessedLetters = letter => {
    if (this.state.guessedLetters.includes(letter)) {
      alert("You already guessed " + letter);
    } else {
      this.setState({
        guessedLetters: [...this.state.guessedLetters, letter]
      });
    }
  };

  updateGuessesRemaining = letter => {
    if (
      !this.state.guessedLetters.includes(letter) &&
      !this.state.word.split("").includes(letter)
    ) {
      this.setState({ guessesRemaining: this.state.guessesRemaining - 1 });
    }
  };
  wordIsGuessed = () => {
    const guessState = this.state.word.split("").map(letter => {
      if (this.state.guessedLetters.includes(letter)) {
        return letter;
      }
    });
    return guessState.join("") === this.state.word;
  };

  gameOver = () => {
    if (this.state.guessesRemaining <= 0) {
      alert("You Ran Out of Guesses");
    } else if (this.wordIsGuessed()) {
      alert("You Won!");
    }
  };
  updateGame = letter => {
    this.updateGuessedLetters(letter);
    this.updateGuessesRemaining(letter);
    this.gameOver();
  };
  render() {
    return (
      <div className="App">
        <h1>WordGuess</h1>
        <h1>Guesses Remaining: {this.state.guessesRemaining}</h1>
        {this.state.word}
        <DisplayWord
          word={this.state.word}
          guessedLetters={this.state.guessedLetters}
        />

        <WrongLetters
          word={this.state.word}
          guessedLetters={this.state.guessedLetters}
        />
        <DisplayAlphabet lettersToGuess={this.state.lettersToGuess} />
      </div>
    );
  }
}

export default App;

//deal with capitalization

//deal with numbers

//repeat until the game is over

// game over: word is guessed or out of guesses
