import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function workOutPI(){
    const PI: number = 3.14159265359
    let radiusStr: string = ("What is the radius of your circle? ")
    let radius: number = parseInt(radiusStr);

    let diameter: number = radius * 2
    let area: number = PI * (radius ** 2)

    console.log("Your circle has a radius of ${radius}, a diameter of ${diameter} and an area of ${area}");
}

workOutPI();