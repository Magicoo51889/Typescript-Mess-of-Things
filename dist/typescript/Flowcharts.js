"use strict";
exports.__esModule = true;
exports.flowchart1 = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function flowchart1() {
    var botName = "Susan";
    var botFrom = 2210;
    var botAge = 20;
    console.log("Hello my name is " + botName + " from space");
    var userName = prompt("What is your name? ");
    console.log("Hello " + userName + " I am from the year " + botFrom + " and I am " + botAge + " years old");
    var userAgeStr = prompt("How old are you? ");
    var userAge = parseInt(userAgeStr);
    var userFutureAge = userAge + (2210 - 2020);
    console.log("Wow! By 2210 you would be " + userFutureAge + ". That is really old!");
}
exports.flowchart1 = flowchart1;
