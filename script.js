// ==========================
// Part 1: Date Display
// ==========================
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (day < 10) {
    day = "0" + day;
}
if ( month < 10) {
    month = "0" + month;
}

var dateMessage = " Today is " + month + "/" + day + "/" + year;

document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================
let numberOne = "22";
let numberTwo = "44";
let numberThree = "11.33";
let numberFour = "thanks";

let valueOne = Number(numberOne);
let valueTwo = Number(numberTwo);
let valueThree = Number(numberThree);
let valueFour = Number(numberFour);

let nanOne = Number.isNaN(valueOne);
let nanTwo = Number.isNaN(valueTwo);
let nanThree = Number.isNaN(valueThree);
let nanFour = Number.isNaN(valueFour);

let integerOne = Number.isInteger(valueOne);
let integerTwo = Number.isInteger(valueTwo);
let integerThree = Number.isInteger(valueThree);
let integerFour = Number.isInteger(valueFour);

let messageNumberOne = " Original: " + numberOne +  ", Converted: " + valueOne + ", isNaN: " + nanOne + ", isInteger: " + integerOne;
let messageNumberTwo = " Original: " + numberTwo + ", Converted: " + valueTwo + ", isNaN: " + nanTwo + ", isInteger: " + integerTwo;
let messageNumberThree = " Original: " + numberThree + ", Converted: " + valueThree + ", isNaN: " + nanThree + ", isInteger: " + integerThree;
let messageNumberFour = " Original: " + numberFour + ", Converted: " + valueFour + ", isNaN: " + nanFour + ", isInteger: " + integerFour;

document.getElementById("numberConversionOutput").innerHTML = messageNumberOne + "<br>" + messageNumberTwo + "<br>" + messageNumberThree + "<br>" + messageNumberFour;

// ==========================
// Part 3: Math & Formatting
// ==========================
let house = 10000.4;
let car = 6000.2;
let plane = 20.6

let totalCost = house + car + plane;
let unrealisticCosts = house * car * plane;

let newCalculationAddition = totalCost.toFixed(2);
let newCalculationMultiply = unrealisticCosts.toFixed(2);

let calculationMessage = " House value is: " + house + "<br>" + " Car value is: " + car + "<br>" + " Plane value is: " + plane + "<br>" + " The addition value of these three is: " + newCalculationAddition + "<br>" + " The multiply value of these three is: " + newCalculationMultiply;

document.getElementById("mathOutput").innerHTML = calculationMessage;

// ==========================
// Part 4: Conditionals
// ==========================
// Value four from part 2
let messageNumber = null;

if (Number.isNaN(valueFour)) {
    messageNumber = "Value four is NaN";
}else{
    messageNumber = " Value four is: " + valueFour;
}

document.getElementById("numberConversionOutput").innerHTML = document.getElementById("numberConversionOutput").innerHTML + "<br>" + messageNumber;

// Addition calculation from part 3
let messageCalculation = null;

if (newCalculationAddition > 20000) {
    messageCalculation = "The addition is high";
}else {
    messageCalculation = "The addition is low";
}

document.getElementById("mathOutput").innerHTML = document.getElementById("mathOutput").innerHTML + "<br>" + messageCalculation;