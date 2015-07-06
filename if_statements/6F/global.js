var num1 = prompt("Give me a number");
var num2 = prompt("Give me a second number");
var num3 = prompt("Give me a third number");

var num1 = parseInt(num1, 10);
var num2 = parseInt(num2, 10);
var num3 = parseInt(num3, 10);

if (num1 + num2 > num3 && num2 + num3 > num1 && num3 + num1 > num2) {
  alert("This can make a triangle!")
} else {
  alert("Sorry, that can't make a triangle :(")
}