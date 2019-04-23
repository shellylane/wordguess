import React, { Component } from "react";
import "./App.css";
import words from "./words";
import DisplayWord from "./components/DisplayWord/DisplayWord";

class App extends Component {
  state = {
    word: words[Math.floor(Math.random() * words.length)],
    guessedLetters: []
  };

  render() {
    return (
      <div className="App">
        <h1>Hangman</h1>
        {this.state.word}
        <DisplayWord
          word={this.state.word}
          guessedLetters={this.state.guessedLetters}
        />
      </div>
    );
  }
}

export default App;

//randommly choose a word

//display the correctly guessed letters underscores for missing letters

//display the letters not yet guessed

//letters guessed not in word

//let user guess a letter (form)

//check if the letter is in the word

//update guess state

//repeat until the game is over

// game over: word is guessed or out of guesses
