"use strict";
exports.__esModule = true;
exports.calculateSQRT = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function calculateSQRT() {
    var inputStr = prompt("What do you want to square root? ");
    var input = parseInt(inputStr);
    var LB1 = input - 1;
    var UB1 = input + 1;
    var estimate = input * (1 / 3);
    var estimate1 = (Math.min(estimate) + 1 / 3) / 2;
    console.log(estimate1);
}
exports.calculateSQRT = calculateSQRT;
