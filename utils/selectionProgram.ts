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

export default animalSelection;