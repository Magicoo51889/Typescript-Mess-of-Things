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
    var esitmate = ((UB1 * UB1) * 0.32379) + ((LB1 * LB1) * 0.67621) / 2;
    var guess = esitmate / (input * 2);
    console.log(guess);
}
exports.calculateSQRT = calculateSQRT;
