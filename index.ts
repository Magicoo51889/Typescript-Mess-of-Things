import * as promptSync from 'prompt-sync'
const prompt = promptSync();
import { makeSentence } from "./utils/forFirstTask";
import { flowchart1 } from "./utils/Flowcharts";
import { workOutPI } from "./utils/piConverter";
import { printBill } from "./utils/splitBill";
import { animalSelection, vegetableSelection } from "./utils/selectionProgram";
import { timesTable } from './utils/timesTable';
import { rainbowList, simonSays } from './utils/colourLists';
import { getRandInt, guesser} from './utils/whileLoop';
import { functionProgram, hcfMain } from './utils/functionProgram'
import { piCalculator } from './utils/MCPiCalculation'

console.log("Options: makesentece; flowchart; workoutpi; printbill; animlaselection; vegetableselection; timestable; colourlists; simonsays, guesser, functionprogram, hcfmain")
let optionStr:string = prompt("Select program to run: ")
let option:string = optionStr.toLowerCase();


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
} else if (option === "exit") {
    console.log("...Ending Program...")
    process.exit(0)
} else {
    console.log("...File not found...")
}
