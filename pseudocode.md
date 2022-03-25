<!-- var letters [ ] -->
var lowerCase []
var upperCase [ ]
var numbers [ ]
var specialCharacters [ ]
var passwordParameters [ ]

var passwordLength = int;
var includeLowercase = boolean
var includeUppercase = boolean
var includeNumbers = boolean
var includeSpecial = boolean

register that a user has clicked on 'generate password' button and execute function generatePassword

generatePassword function ( 

use window.prompt to ask user for password length >= 8 and <= 128 characters
check that provided criteria meets those parameters. If yes, store in passwordLength, else windows.alert "not within parameters, please select a length between 8 and 128" and start generatePassword ( ) over again. 

use window.confirm to determine if user wants to include lowercase letters
If confirm, includeLowercase boolean is true, else false

use window.confirm to determine if user wants to include uppercase letters
if confirmed, includeUppercase is true, else false

use window.confirm to determine if user wants to include numbers
if confirmed, includeUppercase is true, else false

use window.confirm to determine if user wants to include special characters
if confirmed, includeSpecial is true, else false

check if each confirm boolean is true, and if so, concat them to an array. 

create a for loop that uses Math.floor(Math.random) to generate a string of characters for passwordLength.length

return result to end the function