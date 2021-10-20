"use strict";
exports.__esModule = true;
exports.simonSays = exports.rainbowList = void 0;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function rainbowList() {
    var colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    console.log("...Printing the colours in a rainbow...");
    for (var i = 0; i++;) {
        console.log(colours[i]);
    }
    console.log("Finsihed");
}
exports.rainbowList = rainbowList;
function simonSays() {
    var actions = ["Hands on head", "Hands on ears", "Right hand up", "Left hand up", "Hands on shoulders"];
    var pickStr = prompt("Pick a number between 1 and " + actions.length + ": ");
    var pick = parseInt(pickStr);
    var instruction = actions[pick];
    console.log("Simon says ... " + instruction);
}
exports.simonSays = simonSays;
