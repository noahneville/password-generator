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

// variables for each of the four types of characters usable for password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// variables to contain user inputs for password length and each of the four character types
var passwordLength;
var includeLowercase;
var includeUppercase;
var includeNumbers;
var includeSpecial;
// variable to contain the selected arrays
var passwordParameters = [];
// this variable stores the final result. Spent a good 40 minutes trying to figure out why my password always printed 'undefined' before realizing it's because the += function doesn't overwrite the undefined state and just adds to the end of it
var finalResult = "";

function generatePassword(){
  // prompts user to choose a password length and checks to make sure it is within the allowed range
  passwordLength = window.prompt("Please select a password length between 8 and 128 characters.");
  if ( passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("The value you selected is not within the acceptable range. Please choose a number between 8 and 128");
  };
  
  // use confirm method to determine which character types will be used
  includeLowercase = window.confirm("Would you like to include lowercase letters in this password?");
  includeUppercase = window.confirm("Would you like to include uppercase letters in this password?");
  includeNumbers = window.confirm("Would you like to include numbers in this password?");
  includeSpecial= window.confirm("Would you like to include special characters in this password?");
  
  // adds user-selected criteria to one large array
  if(includeLowercase === true) {
    passwordParameters = passwordParameters.concat(lowerCase);
  }

  if(includeUppercase === true) {
    passwordParameters = passwordParameters.concat(upperCase);
  }

  if(includeNumbers === true) {
    passwordParameters = passwordParameters.concat(numbers);
  }

  if(includeSpecial === true) {
    passwordParameters = passwordParameters.concat(specialCharacters);
  }

  for (var i = 0; i < passwordLength; i++) {
    finalResult += passwordParameters[Math.floor(Math.random() * passwordParameters.length)];
  }

  return finalResult;
};