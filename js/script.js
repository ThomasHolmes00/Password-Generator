// Assignment Code 
// Event listener to generate button
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// Write Password Function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

// Password Functions
function generatePassword() {
  var special = ["!, %, &, *, +, -, ., /, <, >"];
  var number = ["0, 1, 2, 3, 4, 5, 6, 7, 8, 9"];
  var lowerCase = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];
  var upperCase = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"];
  var lengthValue;
  var confirmSpecial;
  var confirmNumber;
  var confirmUpperCase;
  var confirmLowerCase;
  var options;



}