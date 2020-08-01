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


/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
*/

var lC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uC = [];
//push lC to uC with uppercase and consolelog
for (var i = 0; i < lC.length; i++) {
  uC.push(lC[i].charAt(0).toUpperCase());
}
console.log(uC);
  uC = uC
//
var nC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sC = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];


/*THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
*/
var characterCount = prompt("How long would you like your password to be? (8 character minimum, 128 character maximum)");

//WHEN prompted for character types to include in the password
//THEN I choose lowercase
var lowerCase = confirm("Would you like to include lowercase letters?");

//uppercase
var upperCase = confirm("Would you like to include uppercase letters?");

//numeric
var numericChar = confirm("Would you like to include numbers?");

//special characters
var specialChar = confirm("Would you like to include special characters?");

/*WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
*/

console.log(lowerCase, upperCase, numericChar, specialChar);


if (lowerCase) {

}
if (upperCase) {

}
if (numericChar) {

}
if (specialChar) {

}

//THEN a password is generated that matches the selected criteria

/*
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/
