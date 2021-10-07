"use strict";
exports.__esModule = true;
exports.printBill = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function printBill() {
    console.log("Hi there! I'm going to split the bill for you!");
    var billInputStr = prompt("How much was the bill? ");
    var numberOfPeopleStr = prompt("How many people are there? ");
    var tipPercentageStr = prompt("What tip would you like to leave? ");
    var billInput = parseInt(billInputStr);
    var numberOfPeople = parseInt(numberOfPeopleStr);
    var tipPercentage = parseInt(tipPercentageStr);
    var tipDeciaml = tipPercentage / 100;
    var tipTotal = billInput * tipDeciaml;
    var billTotal = billInput + tipTotal;
    var costPerPerson = billTotal / numberOfPeople;
    console.log("The bill including the tip is " + billTotal);
    console.log("The cost per person is " + costPerPerson);
}
exports.printBill = printBill;
exports["default"] = printBill;
