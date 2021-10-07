import * as promptSync from 'prompt-sync'
const prompt = promptSync();

export function animalSelection() {
    console.log("Pick an animal from either: Ostrich, Lion or Whale")
    console.log("I will try and guess what animal you have chosen")

    const underwater = prompt("Does your animal live in water? Y/N ")
    const underwaterLower = underwater.toLowerCase();
    if (underwaterLower === "n") {
        const hasWings = prompt("Does your animal have wings? Y/N ")
        const hasWingsLower = hasWings.toLowerCase();
        if (hasWingsLower === "n") {
            console.log("It must be a lion!")
        } else {
            console.log("It must be an Ostrich!")
        }
    } else if (underwaterLower === "y") {
        console.log("It must be a whale!")
    } 

}

export function vegetableSelection() {
    console.log("Pick a vegetable from: Peas, Brocolli, Sweetcorn, Carrot")
    const isGreen:string = prompt("Is your vegetable green? Y/N ")
    const isGreenLower:string = isGreen.toLowerCase();
    if (isGreenLower === "y") {
        const isTree:string = prompt("Is it tree shaped? Y/N ")
        const isTreeLower:string = isTree.toLowerCase();
        if (isTreeLower === "y") {
            console.log("It must be brocolli!")
        } else {
            console.log("It must be peas!")
        }
    } else {
        const isOrange:string = prompt("Is it orange? Y/N ")
        const isOrangeLower:string = isOrange.toLowerCase();
        if (isOrangeLower === "y") {
            console.log("It must be a carrot!")
        } else {
            console.log("It must be sweetcorn!")
        }
    }

}
