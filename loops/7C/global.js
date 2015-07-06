var x = 99

while (x > 2) {
  alert(x + " bottles of beer on the wall. " + x + " bottles of beer. Take one down, pass it around, " + --x + " bottles of beer on the wall.")
}

if (x == 2) {
  alert(x + " bottles of beer on the wall. " + x + " bottles of beer. Take one down, pass it around, " + --x + " bottle of beer on the wall.")
}

if (x == 1) {
  alert(x + " bottle of beer on the wall. " + x + " bottle of beer. Take it down, pass it around, no more bottles of beer on the wall.")
  --x
}

if (x == 0) {
  alert("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
}