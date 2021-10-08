"use strict";
exports.__esModule = true;
exports.timesTable = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function timesTable() {
    var answer = 0;
    var whichStr = prompt("Which times table do you want to do? ");
    var which = parseInt(whichStr);
    console.log("Here is the times table for " + which);
    for (var i = 0; i < 13; i++) {
        var result = which * i;
        console.log(which + " x " + i + " = " + result);
        //need to add the '3 x 3 = 9' bit rather than just '9'
    }
}
exports.timesTable = timesTable;
