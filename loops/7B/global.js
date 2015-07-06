
var start = prompt("Give me a number to start counting from.");
var end = prompt("Stop counting at");
var count = prompt("Count by")

var start = parseInt(start)
var end = parseInt(end)
var count = parseInt(count)

if (start < end) {
  while (start <= end) {
    alert(start)
    start += count
  }
} else {
  while (end < start) {
    alert(start)
    start += count
  }
}