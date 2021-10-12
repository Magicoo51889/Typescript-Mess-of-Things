"use strict";
exports.__esModule = true;
exports.functionProgram = void 0;
function functionProgram() {
    function whichIsLarger(a, b) {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    }
    if (whichIsLarger(4, 5) == 5) {
        console.log("True");
    }
    else {
        console.log("The test has failed");
    }
    console.log(whichIsLarger(7, 3) == 7);
    console.log(whichIsLarger(1, 8) == 8);
    console.log(whichIsLarger(45, 57) == 57);
    function boolLogic(a) {
        if (a) {
            console.log("True");
        }
        else {
            console.log("The test has failed");
        }
    }
    boolLogic(whichIsLarger(4, 5) == 5);
}
exports.functionProgram = functionProgram;
