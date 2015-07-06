var x = 1

var count = prompt("What would you like to count to?")
count = parseInt(count, 10)

while (x <= count) {
  if (x % 3 == 0 && x % 5 == 0) {
    alert("Fizzbuzz")
  }
  else if (x % 3 == 0) {
    alert("Fizz")
  }
  else if (x % 5 == 0) {
    alert("Buzz")
  }
  else {
    alert(x)
  }
  x++
}