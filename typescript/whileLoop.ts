import * as promptSync from 'prompt-sync';
const prompt = promptSync();

export function getRandInt(min, max) {
    let randomNum: number = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomNum)
    return randomNum
}

export function guesser(randomNum) {
    let guessStr: string = prompt("Guess a number between 1 and 10: ")
    let guess: number = parseInt(guessStr);

    while (guess !== randomNum) {
        console.log(randomNum)
        console.log("That is incorrect")
        console.log("Try again... ")
        let guessStr: string = prompt("Guess a number between 1 and 10: ")
        let guess: number = parseInt(guessStr);
        return guess
    }

    console.log("Whoop! You guessed it correctly!")
}

