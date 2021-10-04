"use strict";
exports.__esModule = true;
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1["default"])();
function workOutPI() {
    var PI = 3.14159265359;
    var radiusStr = prompt("What is the radius of your circle? ");
    var radius = parseInt(radiusStr);
    var diameter = radius * 2;
    var area = PI * (Math.pow(radius, 2));
    console.log = ("Your circle has a radius of ${radius}, a diameter of ${diameter} and an area of ${area}");
}
workOutPI();
