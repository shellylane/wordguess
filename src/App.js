import React, { Component } from "react";
import "./App.css";
import words from "./words";
import DisplayWord from "./components/DisplayWord/DisplayWord";
import WrongLetters from "./components/WrongLetters/WrongLetters";
import LetterButton from "./components/LetterButton/LetterButton";
import generateAlphabet from "./alphabet";

class App extends Component {
  state = {
    word: words[Math.floor(Math.random() * words.length)],
    guessedLetters: [],
    guessesRemaining: 10,
    lettersToGuess: generateAlphabet()
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
    if (this.state.guessesRemaining <= 1) {
      alert("You Ran Out of Guesses");
      this.setState({ guessesRemaining: 10 });
      this.setState({ guessedLetters: [] });
      this.setState({ word: words[Math.floor(Math.random() * words.length)] });
    } else if (this.wordIsGuessed()) {
      alert("You Won!");
      this.setState({ guessesRemaining: 10 });
      this.setState({ guessedLetters: [] });
      this.setState({ word: words[Math.floor(Math.random() * words.length)] });
    }
  };

  updateGame = letter => {
    this.updateGuessedLetters(letter);
    this.updateGuessesRemaining(letter);
    this.gameOver();
  };

  handleClick = e => {
    e.preventDefault();
    console.log(e.target.value);
    var letter = e.target.value;

    console.log("letter clicked: " + letter);

    this.updateGame(letter);
  };
  render() {
    return (
      <div className="App">
        <h1>WordGuess</h1>
        <h2>Guesses Remaining:{this.state.guessesRemaining}</h2>
        {this.state.word}
        <DisplayWord
          word={this.state.word}
          guessedLetters={this.state.guessedLetters}
        />

        <WrongLetters
          word={this.state.word}
          guessedLetters={this.state.guessedLetters}
        />
        {this.state.lettersToGuess.map(item => (
          <LetterButton
            value={item}
            key={item}
            item={item}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default App;
