var userAge = prompt("What is your age?");
var userAge = parseInt(userAge, 10);

if (userAge >= 25) {
  alert("You can rent a car.")
};

if (userAge >= 21) {
  alert("Please don't drink and drive.")
};

if (userAge >= 16) {
  alert("You're eligible for a driver's license")
};

if (userAge >= 0 && userAge <= 15) {
  alert("You can't drive yet, but you'll be able to in a few years")
}

if (userAge < 0) {
  alert("You haven't been born yet.")
}

if (isNaN(userAge) == true) {
  alert("Sorry, but that's not a number.")
}
