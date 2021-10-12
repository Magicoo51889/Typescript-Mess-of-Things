import * as promptSync from 'prompt-sync';
const prompt = promptSync();



export function getRandInt() {
    let min: number = 1;
    let max: number = 10;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export function guesser(getRandInt) {
    let guessStr: string = prompt("Guess a number between 1 and 10")
    let guess: number = parseInt(guessStr);

    while (guess != getRandInt) {
        console.log("That is incorrect")
        console.log("Try again... ")
        let guessStr: string = prompt("Guess a number between 1 and 10")
        let guess: number = parseInt(guessStr);
    }
}

console.log("Whoop! You guessed it correctly!")