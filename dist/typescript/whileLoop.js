"use strict";
exports.__esModule = true;
exports.guesser = exports.getRandInt = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function getRandInt(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNum);
    return randomNum;
}
exports.getRandInt = getRandInt;
function guesser(randomNum) {
    var guessStr = prompt("Guess a number between 1 and 10: ");
    var guess = parseInt(guessStr);
    while (guess !== randomNum) {
        console.log(randomNum);
        console.log("That is incorrect");
        console.log("Try again... ");
        var guessStr_1 = prompt("Guess a number between 1 and 10: ");
        var guess_1 = parseInt(guessStr_1);
        return guess_1;
    }
    console.log("Whoop! You guessed it correctly!");
}
exports.guesser = guesser;
