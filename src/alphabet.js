function generateAlphabet() {
  var letters = [];
  for (var i = 97; i <= 122; i++) {
    var letter = String.fromCharCode(i).toLocaleUpperCase();

    letters.push(letter);
  }
  return letters;
}

export default generateAlphabet;
