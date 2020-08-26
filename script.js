var generateBtn = document.querySelector("#generate");
var  passwordText = document.querySelector("#password");

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var spec = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var characters = [];
var passwordCollect = [];
var passwordString = " ";

generateBtn.addEventListener("click", generatePassword);

function writePassword() {
  passwordText.textContent = passwordString;
}

function generatePassword() {
  
  var characterCount = parseInt(prompt("How long would you like your password to be? (8 character minimum & 128 character maximum)"));
  
  if (characterCount > 7 && characterCount < 129) {
    if (confirm("Would you like to include lowercase letters?")) {
      characters.push(lower);
    }
    //uppercase
    if (confirm("Would you like to include uppercase letters?")) {
      characters.push(upper);
    }
    //numeric
    if (confirm("Would you like to include numbers?")) {
      characters.push(numeric);
    }
    //special characters
    if (confirm("Would you like to include special characters?")) {
      characters.push(spec);
    }
    for (var j = 0; j < characterCount; j++) {
      var randomCharacter = Math.floor(Math.random() * characters.length);
      var randomCharacters = Math.floor(Math.random() * characters[randomCharacter].length);
      var passCollection = characters[randomCharacter][randomCharacters];
      passwordCollect.push(passCollection);
      passwordString = passwordCollect.join('');
    }
    writePassword();
    passwordCollect = [];
  }
  else {
    alert("PLEASE TRY AGAIN - Password has 8 character minimum and has 128 character maximum.");
    //location.reload();
  }
}


