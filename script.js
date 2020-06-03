var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var newPassword = prompt("To create a new password, enter a number between 8 and 128");
  var hasLower = confirm("Password will contain lower case letters.");
  var hasUpper = confirm("Password will contain uppercase letters.");
  var hasCharacters = confirm("Password will contain special characters.");
  var hasNumber = confirm("Password will contain numbers.");

  if (newPassword < 8 || newPassword > 128) {
    var tryAgain = alert("number must be BETWEEN 8 and 128");
  } else {
    return generate(newPassword, hasLower, hasUpper, hasCharacters, hasNumber);
  }
}

function generate(newPassword, hasLower, hasUpper, hasCharacters, hasNumber) {

  const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const specials = ["!", "@", "#", "$", "\.", "\?", "\(", "\)", "\-", "\^", "\&", "\=", "\~"];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  generatedPassword = '';
  //var combinedArray = [];
  //combinedArray = [...numbers, ...specials, ...upperCase, ...lowerCase];
  selectedCharacterSets = [];
  if (hasLower) {
    selectedCharacterSets.push(lowerCase);
  }

  if (hasUpper) {
    selectedCharacterSets.push(upperCase);
  }

  if (hasCharacters) {
    selectedCharacterSets.push(specials);
  }

  if (hasNumber) {
    selectedCharacterSets.push(numbers);
  }

  console.log(selectedCharacterSets);

  for (let i = 0; i < newPassword; i++) {
    
    generatedPassword += getRandomCharacter(selectedCharacterSets[i % selectedCharacterSets.length]);
    console.log(generatedPassword);
  }
  return generatedPassword;
}

function getRandomCharacter(arr) {

  return arr[Math.floor(Math.random() * arr.length)];
}




 // if (hasLower && !lowerCase.map(letter => {
      //   generatedPassword.includes(letter);
      // })) {

      //   generate();

      // } else if (hasUpper && !upperCase.map(letter => {
      //   generatedPassword.includes(letter);
      // })) {

      //   generate();

      // } else if (hasCharacters && !specials.map(letter => {
      //   generatedPassword.includes(letter);
      // })) {

      //   generate()

      // } else if (hasNumber && !numbers.map(letter => {
      //   generatedPassword.includes(letter);
      // })) {

      //   generate();

      // }
      // else {
      //   return generatedPassword;
      // }