// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

var possibleSelection = []
var includeLowerCase;
var includeUpperCase;
var includeNumber;
var includeSpecial;

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


function generatePassword () {
  var tellUsWhatToInclude = alert("Please answer the following questions in order to generate your pasword!")
  var includeLowerCase = prompt("Do you want to include lower case letters?")
  var includeUpperCase = prompt("Do you want to include upper case letters?")
  var includeNumber = prompt("Do you want to include numbers?")
  var includeSpecial = prompt("Do you want to include special characters?")
 

 
  if (includeLowerCase == "yes" ) {
    console.log("User wants to include lower case")
    possibleSelection = possibleSelection.push(lowerCasedCharacters)
    console.log(possibleSelection)
  }
  if (includeUpperCase == "yes") {
    console.log ("User wants to include upper case")
    possibleSelection = possibleSelection.push(upperCasedCharacters)
    console.log(possibleSelection)
  }
  if (includeNumber == "yes") {
    console.log ("User wants to include numbers")
    newPass = possibleSelection.push(numericCharacters)
    console.log(possibleSelection)
  }
  if (includeSpecial == "yes") {
    console.log ("User wants to include special characters")
    possibleSelection = possibleSelection.push(specialCharacters)
    console.log(newPass)
   
  }
 
  var passwordLength = parseInt(prompt("How long do you want your password to be? (It must be between 8 and 128 characters"))
  console.log(passwordLength) 

  var outPut = ""

  for (var i = 0; i < passwordLength; i++){
    outPut = outPut + possibleSelection[Math.floor(Math.random() * possibleSelection.length)];
    console.log(outPut + possibleSelection[Math.floor(Math.random() * possibleSelection.length)
  }

return outPut
}



