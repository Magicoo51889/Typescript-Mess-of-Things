"use strict";
exports.__esModule = true;
exports.animalSelection = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function animalSelection() {
    console.log("Pick an animal from either: Ostrich, Lion or Whale");
    console.log("I will try and guess what animal you have chosen");
    var underwater = prompt("Does your animal live in water? Y/N ");
    var underwaterLower = underwater.toLowerCase();
    if (underwaterLower === "n") {
        var hasWings = prompt("Does your animal have wings? Y/N ");
        var hasWingsLower = hasWings.toLowerCase();
        if (hasWingsLower === "n") {
            console.log("It must be a lion!");
        }
        else {
            console.log("It must be an Ostrich!");
        }
    }
    else if (underwaterLower === "y") {
        console.log("It must be a whale!");
    }
}
exports.animalSelection = animalSelection;
exports["default"] = animalSelection;
