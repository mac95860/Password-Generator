// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var generatedPassword = '';
  var newPassword = prompt("To create a new password, enter a number between 8 and 128");
  var lower = confirm("Password will contain lower case letters.");
  var upper = confirm("Password will contain uppercase letters.");
  var characters = confirm("Password will contain special characters.")
  var numbers = confirm("Password will contain numbers.");

  if(newPassword <8 || newPassword >128){
    var tryAgain = alert("number must be BETWEEN 8 and 128");
  } else{
  
    var char = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
    "y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z",
    " 1","2","3","4","5","6","7","8","9","0","!","@","#","$","\.","\?","\(","\)", "\-","\^", "\&", "\=","\~"];
  
    for (var i = 0; i < newPassword; i++) {

    var pOutput = char[Math.floor(Math.random() * char.length)];
    
    generatedPassword += pOutput;
    }
  }
  return generatedPassword;
}
