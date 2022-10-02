var charnumbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charlower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charcapital = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charspec = [ "!", "#", "%", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "~", "?", "@", "[", "]", "^", "_", "{", "}", "|", "~"];

var generateBtn = document.querySelector("#generate");

// función creada
function generatePassword() {

  var length = 0;
  var optupplow = false;
  var optnumber = false;
  var optspecchar = false;
  var arrconcat = [];
  var generatedarr = [];
  var generatedpassword;

  length = parseInt( prompt("Logitud de la contraseña:"), 10 );
  
  console.log("longitud del password", length);

  if (isNaN(length)) {
    alert("Por favor introduzca un número en el siguiente intento.");
    console.log("es un NaN :(");
    return;
  } else if (length < 8 && length >= 128) {
    alert("Error: longitud debe ser mayor que 8 y menor que 128.");
  } else;

  optupplow = confirm ("¿Usar mayúsculas? Si presiona cancelar, sólo se usarán minúsculas.");
  console.log("mayúsculas: ", optupplow);

  optnumber = confirm ("¿Usar números?");
  console.log("números: ", optnumber);

  optspecchar = confirm ("¿Usar caracteres especiales?");
  console.log("caracteres especiales: ", optspecchar);

  arrconcat = arrconcat.concat(charlower);
  // console.log(arrconcat);

  if (optupplow) {
    arrconcat = arrconcat.concat(charcapital);
  //  console.log(arrconcat);
  }
  
  if (optnumber) {
    arrconcat = arrconcat.concat(charnumbers);
  //  console.log(arrconcat);
  } 
  
  if (optspecchar) {
    arrconcat = arrconcat.concat(charspec);
  //  console.log(arrconcat);
  }

  for (var i =0; i <= length; i++) {

    generatedarr[i] = arrconcat[ Math.floor(Math.random() * arrconcat.length)]

  }

  console.log(generatedarr);

  generatedpassword = generatedarr.join("");

  return generatedpassword;
};

// Escriba la contraseña en la entrada #password
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Agregar oyente de eventos para generar el botón
generateBtn.addEventListener("click", writePassword);

