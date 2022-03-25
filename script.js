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

function generatePassword(){
  // this variable stores final result, defined as an empty string so that the password doesn't return 'undefined' at the start every time. Defined within the scope of the function because global scope causes a bug where running the generator twice results in the first password being included in the second.  
  var finalResult = "";
  // an array that stores a single randomly generated character in each if statement below to guarantee that every user selected criteria is represented 
  var guaranteedChar = [];
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
    // performs the random function within the if loop to guarantee this character type appears at least once in the final result
    guaranteedChar.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
  }

  if(includeUppercase === true) {
    passwordParameters = passwordParameters.concat(upperCase);
    guaranteedChar.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
  }

  if(includeNumbers === true) {
    passwordParameters = passwordParameters.concat(numbers);
    guaranteedChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  if(includeSpecial === true) {
    passwordParameters = passwordParameters.concat(specialCharacters);
    guaranteedChar.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  }
  // subtracts the number of characters that have already been randomly generated from the user selected length so that the for loop below runs the correct amount of times for the final result
  passwordLength = passwordLength - guaranteedChar.length;

  for (var i = 0; i < passwordLength; i++) {
    finalResult += passwordParameters[Math.floor(Math.random() * passwordParameters.length)];
  }
  // merges the results of the for loop with the characters already generated and then converts that array to a string
  guaranteedChar.push(finalResult);
  finalResult = guaranteedChar.join("");

  return finalResult;
};