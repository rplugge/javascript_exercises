var leg1 = prompt("First leg of the triangle.")
var leg1 = parseInt(leg1, 10)

var leg2 = prompt("Second leg of the triangle.")
var leg2 = parseInt(leg1, 10)

var leg3 = prompt("Third leg of the triangle.")
var leg3 = parseInt(leg1, 10)

for (; leg1 + leg2 <= leg3 || leg2 + leg3 <= leg1 || leg3 + leg1 <= leg2;) {
  var leg1 = prompt("Sorry, that didn't make a triangle. First leg?")
  var leg1 = parseInt(leg1)

  var leg2 = prompt("Second leg of the triangle.")
  var leg2 = parseInt(leg1)

  var leg3 = prompt("Third leg of the triangle.")
  var leg3 = parseInt(leg1)
}

alert("That's a triangle!")
