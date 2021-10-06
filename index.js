"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
function workOutPI() {
    var PI = 3.14159265359;
    var radiusStr = prompt("What is the radius of your circle? ");
    var radius = parseInt(radiusStr);
    var diameter = radius * 2;
    var area = PI * (Math.pow(radius, 2));
    console.log("Your circle has a radius of ${radius}, a diameter of ${diameter} and an area of ${area}");
}
workOutPI();
