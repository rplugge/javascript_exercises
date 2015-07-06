var num1 = prompt("Please enter your first number");
var num1 = parseInt(num1, 10);

var num2 = prompt("Please enter your second number");
var num2 = parseInt(num2, 10);

var num3 = prompt("Please enter your third number");
var num3 = parseInt(num3, 10);

var total_add = num1 + num2 + num3;
var total_subtract = num1 - num2 - num3;
var product = num1 * num2 * num3;
var quotient = num1 / num2;

alert(num1 + ' + ' + num2 + ' + ' + num3 + ' = ' + total_add);
alert(num1 + ' - ' + num2 + ' - ' + num3 + ' = ' + total_subtract);
alert(num1 + ' * ' + num2 + ' * ' + num3 + ' = ' + product);
alert(num1 + ' / ' + num2 + ' = ' + quotient);
alert(num1 + '++ ' + ' = ' + ++num1);
alert(num2 + '-- ' + ' = ' + --num1);