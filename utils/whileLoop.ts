import * as promptSync from 'prompt-sync';
const prompt = promptSync();

export function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function guesser(getRandInt) {
    let guessStr: string = prompt("Guess a number between 1 and 10: ")
    let guess: number = parseInt(guessStr);

    while (guess !== getRandInt(1,10)) {
        console.log("That is incorrect")
        console.log("Try again... ")
        let guessStr: string = prompt("Guess a number between 1 and 10: ")
        let guess: number = parseInt(guessStr);
    }

    console.log("Whoop! You guessed it correctly!")
}

