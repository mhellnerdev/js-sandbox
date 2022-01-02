startingMoney = prompt("How much do you have to spend on milk?");
costPerBottle = prompt("How much does the milk cost?");

function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk.");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);

    return numberOfBottles

}

function calcChange(startingAmount, costPerBottle) {
  var change = startingAmount % costPerBottle;
  return change;
}

getMilk(5)