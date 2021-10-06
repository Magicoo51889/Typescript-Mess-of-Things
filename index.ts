import * as promptSync from "prompt-sync";
const prompt = promptSync();

function workOutPI(){
    const PI: number = 3.14159265359
    let radiusStr: string = prompt("What is the radius of your circle? ")
    let radius: number = parseInt(radiusStr);

    let diameter: number = radius * 2
    let area: number = PI * (radius ** 2)

    console.log("Your circle has a radius of ${radius}, a diameter of ${diameter} and an area of ${area}");
}

workOutPI();