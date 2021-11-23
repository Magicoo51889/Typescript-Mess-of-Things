// SETUP
import * as promptSync from 'prompt-sync'
const prompt = promptSync();

// NOT OOP
import { makeSentence } from "./typescript/NOOP/forFirstTask";
import { flowchart1 } from "./typescript/NOOP/Flowcharts";
import { workOutPI } from "./typescript/NOOP/piConverter";
import { printBill } from "./typescript/NOOP/splitBill";
import { animalSelection, vegetableSelection } from "./typescript/NOOP/selectionProgram";
import { timesTable } from './typescript/NOOP/timesTable';
import { rainbowList, simonSays } from './typescript/NOOP/colourLists';
import { getRandInt, guesser} from './typescript/NOOP/whileLoop';
import { functionProgram, hcfMain } from './typescript/NOOP/functionProgram';
import { piCalculator } from './typescript/NOOP/MCPiCalculation';
import { findSqrt } from './typescript/NOOP/calculateSQRT';

// OOP
import { ksp_man } from './typescript/OOP/KSPClass';
import { properties } from './typescript/OOP/MoreProperties_T1';

let optionStr:string = prompt("Select program to run: ")
let option:string = optionStr.toLowerCase();

// THE FUNCTIONS
if (option === "makesentence") {
    console.log("...Running makeSentence...")
    makeSentence();
} else if (option === "flowchart") {
    console.log("...Running flowchart1...")
    flowchart1();
} else if (option === "workoutpi") {
    console.log("...Running workoutPi...")
    workOutPI();
} else if (option === "printbill") {
    console.log("...Running printBill...")
    printBill();
} else if (option === "animalselection") {
    console.log("...Running animalSelection...")
    animalSelection();
} else if (option === "vegetableselection") {
    console.log("...Running vegetableSelection")
    vegetableSelection();
} else if (option === "timestable") {
    console.log("...Running timesTable...")
    timesTable();
} else if (option === "colourlists") {
    console.log("...Running colourLists...")
    rainbowList();
} else if (option === "simonsays") {
    console.log("...Running simonSays...")
    simonSays();
} else if (option === "guesser") {
    console.log("...Running guesser...")
    guesser(getRandInt(1,10));
} else if (option === "functionprogram") {
    console.log("...Running functionProgram...")
    functionProgram();
} else if (option === "hcfmain") {
    console.log("...Running hcfMain...")
    hcfMain();
} else if (option === "picalculator") {
    console.log("...Running Pi calculator...")
    piCalculator()
} else if (option === "ksp person") {
    console.log("...Running Ksp Man...")
    ksp_man();
} else if (option === "propertiest1") {
    console.log("...Running properties...")
    properties();
} else if (option === "calculatesqrt") {
    console.log("...Running calculateSQRT...")
    findSqrt(prompt("What do you want to sqrt? "))
} else if (option === "exit") {
    console.log("...Ending Program...")
    process.exit(0)
} else {
    console.log("...File not found...")
}
