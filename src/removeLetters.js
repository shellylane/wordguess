function removeLetters(guessedLetter, lettersArray) {
  console.log(guessedLetter);
  console.log(lettersArray);

  for (var i = 0; i < lettersArray.length; i++) {
    console.log("for loop started");
    if (guessedLetter === lettersArray[i]) {
      lettersArray.splice(i, 1);
      console.log("letters after splice: " + lettersArray);
      i--;
    }
  }
}

export default removeLetters;
