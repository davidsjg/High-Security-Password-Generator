// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword;
var PWL;
var Lower;
var Upper;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var PasswordLength = function () {
  PWL = window.prompt("Enter password length (must be between 8-128): ");
    if ((PWL < 8) || (PWL > 128)) {
      if (!window.alert("Password must be between 8-128 characters."))
      LowerBoolean()
    } 
}

var LowerBoolean = function () {
  Lower = window.prompt("Would you like to use lowercase letters?");
}

var UpperBoolean = function () {
  Upper = window.prompt("Would you like to use uppercase letters?");
}

// var UpperBoolean = function () {
//   var Upper = window.prompt("Would you like to use numbers?");
 
//   console.log(Upper)
// }

// var SpecialCharacters = function () {
//   var Special = window.prompt("Would you like to use special characters?");
 
//   console.log(Special)
// }


PasswordLength();
LowerBoolean();
UpperBoolean();
var lowerArray = [];
var UpperArray = [];
// var lowerPasswordLength = Math.floor(PWL * 0.5);
// var UpperPasswordLength = PWL - lowerPasswordLength;
// var upperPasswordLength;

// SpecialCharacters();
// var FourSelect = 0.25;
// var ThreeSelect = 0.333333333333333333;



const lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const UpperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];



if (Lower=="y") {
for (var i = 0; i < PWL; i++){
    const randomLower = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
    lowerArray[i] = randomLower;
    }
  }

console.log("lowerArray " + lowerArray);

//this is where i stopped.  pretty much working if you select one or the other, or concats if both. 

//issue is, if i say no to the above, i need to create a password PWL
if (Upper=="y"){
  var TwoSelect = Math.floor(PWL*0.5)
  var removed = lowerArray.splice(0,TwoSelect)
  for (var i = 0; i < (TwoSelect); i++){
  const randomLower = UpperCaseArray[Math.floor(Math.random() * UpperCaseArray.length)];
  UpperArray[i] = randomLower;
  }
  console.log("UpperArray " + UpperArray);

  var ConcatArray = lowerArray.concat(UpperArray);
console.log("Concat array " + ConcatArray);
  }



// to remove TwoSelect elements starting from position 3:
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// var removed = arr.splice(2,2);



// for (var i=0; i<(PasswordLength *0.5); i++){

//   const randomLower = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
//   lowerArray[i] = randomLower;

// };

// const randomLower = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];

// function getRandomLowercase(lowerCaseArray) { 
//   //get random index value 
//   const randomIndex = Math.floor(Math.random() * 7)

//   //get random item
//   const item = lowerCaseArray[randomIndex];


//   console.log(item);
//   return item;
// }

// getRandomLowercase ();


// console.log(lowerLetter);

// generating random number in range [0, 1)
// var lowerLetter = Math.floor(Math.random() * 26)

// console.log(lowerLetter;





