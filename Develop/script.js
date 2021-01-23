// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword;
var PWL;
var Lower;
var Upper;
var NumberB;

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

var NumberBoolean = function () {
  NumberB = window.prompt("Would you like to use numbers?");
}

// var SpecialCharacters = function () {
//   var Special = window.prompt("Would you like to use special characters?");
 
//   console.log(Special)
// }


PasswordLength();
LowerBoolean();
UpperBoolean();
NumberBoolean();

var lowerArray = [];
var UpperArray = [];
var NumbArray = [];
// var lowerPasswordLength = Math.floor(PWL * 0.5);
// var UpperPasswordLength = PWL - lowerPasswordLength;
// var upperPasswordLength;

// SpecialCharacters();
// var FourSelect = 0.25;
// var ThreeSelect = 0.333333333333333333;



const lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const UpperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const NumbersArray = [0,1,2,3,4,5,6,7,8,9];



if (Lower=="y") {
  //creates a random array from lowercase lettesrs PWL long 
  for (var i = 0; i < PWL; i++){
    const randomLower = lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
    lowerArray[i] = randomLower;
    }
  }

if (Upper == "y" && Lower == "y"){
  //generates variable half password length
  var TwoSelect = Math.floor(PWL*0.5)
  //removes half of lowerArray
  var removed = lowerArray.splice(0,TwoSelect)
  
  //creates upper array TwoSelect long (half of password)
  for (var i = 0; i < (TwoSelect); i++){
  const randomUpper = UpperCaseArray[Math.floor(Math.random() * UpperCaseArray.length)];
  UpperArray[i] = randomUpper;
  }
  //concats lowerArray and uppperArray
  var ConcatArray1 = lowerArray.concat(UpperArray);
  console.log("UpperArray " + ConcatArray1);
} else if (Upper=="y") {
  //fill array with all Upper if 
  for (var i = 0; i < PWL; i++){
    const randomUpper = UpperCaseArray[Math.floor(Math.random() * UpperCaseArray.length)];
    UpperArray[i] = randomUpper;
    }
    console.log(UpperArray);
}

if (Upper == "y" && Lower == "y" && NumberB == "y"){
  //generates variable one-third password length
  var ThreeSelect = Math.floor(PWL*0.3333333333333333)
  //removes the last one-third of ConcatArray1(contain upper and lower arrays)
  var removed = ConcatArray1.splice(0,ThreeSelect)
  
  //creates number array ThreeSelect long (one-third of password length)
  for (var i = 0; i < (ThreeSelect); i++){
  const randomNumber = NumbersArray[Math.floor(Math.random() * NumbersArray.length)];
  NumbArray[i] = randomNumber;
  }
  //concats ConcatArray1 and NumbArray
  var ConcatArray2 = ConcatArray1.concat(NumbArray);
  console.log("ConcatArray2 " + ConcatArray2);

} else if (NumberB == "y" && Lower == "y"){
  //generates variable half password length
  var TwoSelect = Math.floor(PWL*0.5)
  //removes half of lowerArray
  var removed = lowerArray.splice(0,TwoSelect)
  
  //creates number array TwoSelect long (half of password)
  for (var i = 0; i < (TwoSelect); i++){
   randomNumber = NumbersArray[Math.floor(Math.random() * NumbersArray.length)];
  NumbArray[i] = randomNumber;
  }
  //concats lowerArray and NumberArray
  var ConcatArray3 = lowerArray.concat(NumbArray);

console.log(ConcatArray3)

  console.log(ConcatArray3);
} 











// } else if (Upper=="y") {
//   //fill array with all Upper if 
//   for (var i = 0; i < PWL; i++){
//     const randomUpper = UpperCaseArray[Math.floor(Math.random() * UpperCaseArray.length)];
//     UpperArray[i] = randomUpper;
//     }
//     console.log(UpperArray);
// }




//this is where i stopped.  pretty much working if you select one or the other, or concats if both. 

//issue is, if i say no to the above, i need to create a password PWL
// if (Upper=="y"){
//   var TwoSelect = Math.floor(PWL*0.5)
//   var removed = lowerArray.splice(0,TwoSelect)
//   for (var i = 0; i < (TwoSelect); i++){
//   const randomLower = UpperCaseArray[Math.floor(Math.random() * UpperCaseArray.length)];
//   UpperArray[i] = randomLower;
//   }
//   console.log("UpperArray " + UpperArray);

//   var ConcatArray = lowerArray.concat(UpperArray);
// console.log("Concat array " + ConcatArray);
//   }



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


