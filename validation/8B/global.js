var userNum = prompt("Guess the number I'm thinking of")
var userNum = parseInt(userNum, 10)

for (number=96; userNum != number;) {
  var userNum = prompt("Sorry that is incorrent. Guess again")
}

alert("Congratz!")