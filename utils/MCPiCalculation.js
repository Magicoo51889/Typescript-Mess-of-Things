"use strict";
exports.__esModule = true;
exports.piCalculator = void 0;
function piCalculator() {
    var INTERVAL = 1000;
    var circlePoints = 0;
    var squarePoints = 0;
    function piCalculation(min, max) {
        for (var i = 0; i < (INTERVAL * INTERVAL); i++) {
            var rand_x = (Math.random() * (max - min) + min);
            var rand_y = (Math.random() * (max - min) + min);
            var originDist = Math.sqrt(rand_x * rand_x + rand_y * rand_y);
            if (originDist <= 1) {
                circlePoints += 1;
            }
            squarePoints += 1;
            var pi = 4 * (circlePoints / squarePoints);
            console.log("Final estimation of pi: " + pi);
        }
    }
    piCalculation(-1, 1);
}
exports.piCalculator = piCalculator;
