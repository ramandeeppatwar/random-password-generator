var generateBtn = document.querySelector("#generate");

//Pasword input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
      
    passwordText.value = password;
}
  
    //add eventlsitener 
generateBtn.addEventListener("click", writePassword);  
   function generatePassword() {

    let allChars = "";
    let password = "";
    
    var totalLength = prompt(
      "Please select the number of characters for your password.")
    if (totalLength >= 8 && totalLength <= 128) {
      alert("Thank you for your entry.");
    } else {
      (totalLength < 8 && totalLength > 128)
        alert("Entry invalid. Please choose a number between 8 and 128.");
        return "";
      }
      //collect user input and store it
      let upper = confirm("Would you like to include uppercase letters?");
      let lower = confirm("Would you like to include lowercase letters?");
      let symbol = confirm("Would you like to include special characters?");
      let number = confirm("Would you like to include numbers?");

    if (upper) {
      allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      alert("No uppercase letters selected.")
    }
    if (lower) {
      allChars += "abcdefghijklmnopqrstuvwxyz";
    } else {
      alert("No lowercase letters selected.")
    }
    if (symbol) {
      allChars += "!@#$%^&*()_+-=[]{|}:;,./?><`~\"";
    } else {
      alert("No special characters selected")
    }
    if (number) {
      allChars += "0123456789";
    } else {
      alert("No numbers selected.")
    }
    //Loop to generate random characters
    for (i = 0; i < totalLength; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
  return password;
}