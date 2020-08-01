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





/*IVEN I need a new, secure password
WHEN I click the button to generate a password
*/


my var = characterCount;
my var = lowerCase;
my var = upperCase;
my var = numericChar;
my var = specialChar;

my var = lC;
my var = uC;
my var = nC;
my var = sC;

/*THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
*/

/*
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
*/
characterCount = prompt("How long would you like your password to be? (8 character minimum, 128 character maximum)");

//WHEN prompted for character types to include in the password
//THEN I choose lowercase
lowerCase = prompt("Would you like to include lowercase letters?");

//uppercase
upperCase = prompt("Would you like to include uppercase letters?");

//numeric
numericChar = prompt("Would you like to include numbers?");

//special characters
specialChar = prompt("Would you like to include special characters?");

/*WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
*/

if (lowerCase)

if (upperCase)

if (numericChar)

if (specialChar)

//THEN a password is generated that matches the selected criteria

/*
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/