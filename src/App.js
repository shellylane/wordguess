import React, { Component } from "react";
import "./App.css";
import words from "./words";
import DisplayWord from "./components/DisplayWord/DisplayWord";
import LetterButton from "./components/LetterButton/LetterButton";
import generateAlphabet from "./alphabet";

class App extends Component {
  //Setting State
  state = {
    //Random Word
    word: words[Math.floor(Math.random() * words.length)],
    //Array of Already Guessed Letters
    guessedLetters: [],
    //keep track of how many guesses are left
    guessesRemaining: 10,
    //array of alphabet
    lettersToGuess: generateAlphabet(),
    //keep track of wins (word guessed in allotted moves)
    wins: 0,
    //keep track of losses (run out of guesses)
    losses: 0,
    //message to display of game status/instructions
    gameMessage: "Click on a letter to guess the word"
  };

  //Everytime the browser is updated run this function
  componentDidUpdate() {
    //call the checkWin functon
    this.checkWin();
  }

  //Function to update the GuessedLetters array
  updateGuessedLetters = letter => {
    //update state of guessed letters array to include letter clicked on
    this.setState({
      guessedLetters: [...this.state.guessedLetters, letter]
    });
  };

  //Function to update Guesses Left
  updateGuessesRemaining = letter => {
    //check if letter is guessed is NOT in guessed letters array and ALSO NOT in the word to guess
    if (
      !this.state.guessedLetters.includes(letter) &&
      !this.state.word.split("").includes(letter)
    ) {
      //resets state of guessesRemaining by decrmenting by one
      this.setState({ guessesRemaining: this.state.guessesRemaining - 1 });
    }
  };

  //Function to update the lettersToGuess array
  updateLettersToGuess = letter => {
    //make a new array that is equl to the lettersToGuessArray with the letter guess filtered out
    let lettersArray = this.state.lettersToGuess.filter(
      item => item !== letter
    );
    //sets state of of lettersToGuess equal to the new array that has been filtered
    this.setState({ lettersToGuess: lettersArray });
  };

  //function to check if word is guessed and user wins
  checkWin = () => {
    //If wordIsGuessed is true
    if (this.wordIsGuessed()) {
      //Change Game Message Text
      this.setState({ gameMessage: "You Won! Click a letter to try again!" });
      //Add a win to scoreboard
      this.setState({ wins: this.state.wins + 1 });
      //reset the game
      this.gameReset();
    } else {
      this.checkLoss();
    }
  };

  //function to check if wordIsGuessed
  wordIsGuessed = () => {
    //guess state is equal to the current state of word split. then it maps over and checks if the item is included in the guessedLetters array and compares
    const guessState = this.state.word.split("").map(letter => {
      //if letter is included it returns the letter
      if (this.state.guessedLetters.includes(letter)) {
        return letter;
      }
    });
    //Returns true or false if the guess state equals current state of word
    return guessState.join("") === this.state.word;
  };

  //Function to deal with end of game
  checkLoss = () => {
    //ChecK to see how many guesses remain. If guesses are = 0 run the following:
    if (this.state.guessesRemaining === 0) {
      //change Game Message Text
      this.setState({
        gameMessage: "You Ran Out of Guesses :(  Click a letter to try again!"
      });
      //add a loss to scoreboard
      this.setState({ losses: this.state.losses + 1 });
      //reset the game
      this.gameReset();
      //if the word is guessed
    }
  };

  //Function to reset the game - Reset state
  gameReset = () => {
    //reset guesses remaining
    this.setState({ guessesRemaining: 10 });
    //reset guessedLetters to empty
    this.setState({ guessedLetters: [] });
    //generate new random word
    this.setState({ word: words[Math.floor(Math.random() * words.length)] });
    //reset letters to guess
    this.setState({ lettersToGuess: generateAlphabet() });
  };

  //Function to update the game after each click
  updateGame = letter => {
    //call Update Guessed Letters Function
    this.updateGuessedLetters(letter);
    //call Update Letters to Guess Function
    this.updateLettersToGuess(letter);
    //call update Guesses Remaining Function
    this.updateGuessesRemaining(letter);
    //Call Check Win  Function
    //this.checkwin();
  };

  //Handles click of letter
  handleClick = e => {
    e.preventDefault();
    //Sets Game Message
    this.setState({ gameMessage: "Click on a letter to guess the word" });
    //set value of letter clicked on equal to variable
    var letter = e.target.value;
    //call update Game Fuction
    this.updateGame(letter);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="jumbotron jumboMine justify-content-center">
                <div className="row">
                  <div className="col">
                    <h1>WordGuess</h1>
                  </div>
                </div>
                <div className="row ">
                  <div className="col">
                    <h5 className="bottom-margin">{this.state.gameMessage}</h5>
                  </div>
                </div>
                <div className="row bottom-margin">
                  <div className="col">
                    {" "}
                    <h4>Guesses Left: {this.state.guessesRemaining}</h4>
                  </div>
                  <div className="col">
                    <h4>Wins: {this.state.wins}</h4>
                  </div>{" "}
                  <div className="col">
                    <h4>Losses: {this.state.losses}</h4>
                  </div>{" "}
                </div>
                <div className="row word">
                  <div className="col">
                    <DisplayWord
                      word={this.state.word}
                      guessedLetters={this.state.guessedLetters}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col justify-contents-center">
              {this.state.lettersToGuess.map(item => (
                <LetterButton
                  value={item}
                  key={item}
                  item={item}
                  handleClick={this.handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
