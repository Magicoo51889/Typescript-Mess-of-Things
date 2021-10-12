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
    console.log(whichIsLarger(4, 5) == 5, "The test has failed");
    console.log(whichIsLarger(7, 3) == 7, "The test has failed");
    console.log(whichIsLarger(1, 8) == 8, "The test has failed");
    console.log(whichIsLarger(45, 57) == 57, "The test has failed");
}
exports.functionProgram = functionProgram;
