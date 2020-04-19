// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCasedCharacters = [
  'a',
  'b', 
  'c', 
  'd', 
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var possibleSelection = []

function generatePassword () {
  var includeLowerCase = prompt("Do you want to include lower case?")
  var includeUpperCase = prompt("Do you want to include upper case?")
  var includeNumber = prompt("Do you want to include numbers?")
  var includeSpecial = prompt("Do you want to include special characters?")
  var outPut = ""

 
  if (includeLowerCase == "yes" ) {
    console.log("User wants to include lower case")
    possibleSelection.push(lowerCasedCharacters)
    console.log(possibleSelection)
  }
  if (includeUpperCase == "yes") {
    console.log ("User wants to include upper case")
    possibleSelection.push(upperCasedCharacters)
    console.log(possibleSelection)
  }
  if (includeNumber == "yes") {
    console.log ("User wants to include numbers")
    possibleSelection.push(numericCharacters)
    console.log(possibleSelection)
  }
  if (includeSpecial == "yes") {
    console.log ("User wants to include special characters")
    possibleSelection.push(specialCharacters)
    console.log(possibleSelection)

  }
 
  var passwordLength = parseInt(prompt("How long do you want your password to be? (It must be between 8 and 128 characters"))
  console.log(passwordLength) 

  for (var i = 0; i < passwordLength; i++){
    outPut = outPut + "Banana"
  }

return outPut
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

for(var i = 0; i < 12; i++){
  console.log(numericCharacters[i])
}

console.log("Apple" + "Kiwi")