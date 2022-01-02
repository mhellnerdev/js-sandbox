weight = prompt("What is your weight in kilograms: ")
height = prompt("What is your height in meters: ")

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2)
  return Math.round(bmi);
}

var bmi = bmiCalculator(weight, height);


if (bmi < 18.5){
console.log("Your BMI is " + bmi + ". You are under weight.")
}

if (bmi > 18.5 && bmi < 25) {
  console.log("Your BMI is " + bmi + ". You are normal weight.")
}

if (bmi >= 25) {
  console.log("Your BMI is " + bmi + ". You are over weight.")
}