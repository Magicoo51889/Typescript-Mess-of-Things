"use strict";
exports.__esModule = true;
exports.hcfMain = exports.functionProgram = void 0;
function boolLogic(programName) {
    if (programName) {
        console.log("True");
    }
    else {
        console.log("The test has failed");
    }
}
function functionProgram() {
    function whichIsLarger(a, b) {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    }
    boolLogic(whichIsLarger(4, 5) == 5);
    boolLogic(whichIsLarger(7, 3) == 7);
    boolLogic(whichIsLarger(1, 8) == 8);
    boolLogic(whichIsLarger(45, 57) == 57);
}
exports.functionProgram = functionProgram;
function hcfMain() {
    function hcfProgram(a, b) {
        while (a && b > 0) {
            if (a === b) {
                return a;
            }
            else if (a > b) {
                a -= b;
            }
            else {
                b -= a;
            }
        }
    }
    boolLogic(hcfProgram(12, 15) === 3);
    boolLogic(hcfProgram(28, 35) === 7);
    boolLogic(hcfProgram(40, 22) === 2);
    boolLogic(hcfProgram(60, 48) === 12);
    boolLogic(hcfProgram(273, 105) === 21);
}
exports.hcfMain = hcfMain;
