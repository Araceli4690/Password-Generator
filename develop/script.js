// Assignment code here

var lowAl = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAl = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ['1', '2', '3', '4', '5','6','7','8','9'];
var specialChar = ["+", "-", "&", "||", "!", "^", "~", "*", "?", ":"];
var charPool = [];
var passArr = [];
var newPassword = [];

//window.confirm prompt for password criteria
var generatePassword = function() {
  var length = prompt("Choose a password length between 8 and 128 characters");
    if(length >= 8 && length <= 128) {
      var lowerCase = confirm('use lower case letters?');
      var upperCase = confirm('use upper case letters?');
      var special = confirm('use special characters?');
      var numeric = confirm('use numbers?');
      if (lowerCase || upperCase || special || numeric) {
        if (lowerCase) {
          for(var i = 0; i < lowAl.length; i++) {
            charPool.push(lowAl[i]);
          }
        } 
        if (upperCase) {
          for(var i = 0; i < upperAl.length; i++) {
            charPool.push(upperAl[i]);
          }
        }
        if (special) {
          for(var i = 0; i < specialChar.length; i++) {
            charPool.push(specialChar[i]);
          }
        }
        if (numeric) {
          for(var i = 0; i < number.length; i++) {
            charPool.push(number[i]);
          }
        }
        for (var i = 0; i <length; i++) {
          passArr.push(charPool[Math.floor(Math.random() * charPool.length)]);

        }
        var newPass = passArr.join("");

        return newPass;

      }
  }
};

console.log(passArr);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

