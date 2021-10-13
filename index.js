"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var forFirstTask_1 = require("./utils/forFirstTask");
var Flowcharts_1 = require("./utils/Flowcharts");
var piConverter_1 = require("./utils/piConverter");
var splitBill_1 = require("./utils/splitBill");
var selectionProgram_1 = require("./utils/selectionProgram");
var timesTable_1 = require("./utils/timesTable");
var colourLists_1 = require("./utils/colourLists");
var whileLoop_1 = require("./utils/whileLoop");
var functionProgram_1 = require("./utils/functionProgram");
var MCPiCalculation_1 = require("./utils/MCPiCalculation");
console.log("Options: makesentece; flowchart; workoutpi; printbill; animlaselection; vegetableselection; timestable; colourlists; simonsays, guesser, functionprogram, hcfmain");
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
    (0, selectionProgram_1.vegetableSelection)();
}
else if (option === "timestable") {
    console.log("...Running timesTable...");
    (0, timesTable_1.timesTable)();
}
else if (option === "colourlists") {
    console.log("...Running colourLists...");
    (0, colourLists_1.rainbowList)();
}
else if (option === "simonsays") {
    console.log("...Running simonSays...");
    (0, colourLists_1.simonSays)();
}
else if (option === "guesser") {
    console.log("...Running guesser...");
    (0, whileLoop_1.guesser)(whileLoop_1.getRandInt);
}
else if (option === "functionprogram") {
    console.log("...Running functionProgram...");
    (0, functionProgram_1.functionProgram)();
}
else if (option === "hcfmain") {
    console.log("...Running hcfMain...");
    (0, functionProgram_1.hcfMain)();
}
else if (option === "picalculator") {
    console.log("...Running Pi calculator...");
    (0, MCPiCalculation_1.piCalculator)();
}
else if (option === "exit") {
    console.log("...Ending Program...");
    process.exit(0);
}
else {
    console.log("...File not found...");
}
