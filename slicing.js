/* ======= Formatting string with slicing ======= */

//Get the name
var name = prompt("What is your name?");

// Slice the first char of name and capitalize
var firstLetter = name.slice(0,1);
var firstLetter = firstLetter.toUpperCase();

// Slice remaining letters and lowercase
var remainingLetters = name.slice(1,140);
var remainingLetters = remainingLetters.toLowerCase();

capitalizedName = firstLetter + remainingLetters


alert("Hello " + capitalizedName)

