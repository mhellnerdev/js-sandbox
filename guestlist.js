var guestList = ["Mark", "Destine", "Derek", "Kenny", "Alex"]

var guestName = prompt('What is your name: ')

if (guestList.includes(guestName)) {
  alert("Welcome!");
} else {
  alert("You are not on the list!")
}

