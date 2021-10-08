"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var forFirstTask_1 = require("./utils/forFirstTask");
var Flowcharts_1 = require("./utils/Flowcharts");
var piConverter_1 = require("./utils/piConverter");
var splitBill_1 = require("./utils/splitBill");
var selectionProgram_1 = require("./utils/selectionProgram");
var selectionProgram_2 = require("./utils/selectionProgram");
var timesTable_1 = require("./utils/timesTable");
console.log("Options: makesentece; flowchart; workoutpi; printbill; animlaselection; vegetableselection; timestable");
var optionStr = prompt("Select program to run: ");
var option = optionStr.toLowerCase();
if (option === "makesentence") {
    console.log("...Running makeSentence...");
    (0, forFirstTask_1.makeSentence)();
}
else if (option === "flowchart") {
    console.log("...Running flowchart1...");
    (0, Flowcharts_1.flowchart1)();
}
else if (option === "workoutpi") {
    console.log("...Running workoutPi...");
    (0, piConverter_1.workOutPI)();
}
else if (option === "printbill") {
    console.log("...Running printBill...");
    (0, splitBill_1.printBill)();
}
else if (option === "animalselection") {
    console.log("...Running animalSelection...");
    (0, selectionProgram_1.animalSelection)();
}
else if (option === "vegetableselection") {
    console.log("...Running vegetableSelection");
    (0, selectionProgram_2.vegetableSelection)();
}
else if (option === "timestable") {
    console.log("...Running timesTable...");
    (0, timesTable_1.timesTable)();
}
else {
    console.log("...File not found...");
}
