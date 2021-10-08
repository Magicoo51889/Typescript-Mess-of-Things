import * as promptSync from 'prompt-sync'
const prompt = promptSync();

import { makeSentence } from "./utils/forFirstTask";
import { flowchart1 } from "./utils/Flowcharts";
import { workOutPI } from "./utils/piConverter";
import { printBill } from "./utils/splitBill";
import { animalSelection } from "./utils/selectionProgram";
import { vegetableSelection } from "./utils/selectionProgram";
import { timesTable } from './utils/timesTable';

let optionStr:string = prompt("Select program to run: ")
let option:string = optionStr.toLowerCase();



if (option = "makeSentence") {
    console.log("...Running makeSentence...")
    makeSentence();
} else if (option = "flowchart") {
    console.log("...Running flowchart1...")
    flowchart1();
} else if (option = "workoutPi") {
    console.log("...Running workoutPi...")
    workOutPI();
} else if (option = "printBill") {
    console.log("...Running printBill...")
    printBill();
} else if (option = "animalSelection") {
    console.log("...Running animalSelection...")
    animalSelection();
} else if (option = "vegetableSelection") {
    console.log("...Running vegetableSelection")
    vegetableSelection();
} else if (option = "timesTable") {
    console.log("...Running timesTable...")
    timesTable();
}



