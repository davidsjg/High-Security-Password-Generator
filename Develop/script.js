// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//propmt user if lowercase letters are acceptable
var options = ["Y", "N"];
var PWL = 0;


var LowerBoolean = function () {
  var PWL = window.prompt("Enter password length (must be between 8-128): ");
    if ((PWL < 8) || (PWL > 128)) {
      if (!window.alert("Password must be between 8-128 characters."))
      LowerBoolean()
    } 
  console.log(PWL)


}


LowerBoolean()





// var playGame = function() {
//   // Ask user for their choice
//   var PWLength = window.prompt("Enter R, P, or S:");

//   // If user pressed Cancel, immediately end function
//   if (!userChoice) {
//     return;
//   }

//generate 3 arrays.  
//1. 