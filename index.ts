import PromptSync from "prompt-sync";
const prompt = PromptSync();

let name: string = prompt("Enter your name: ")
let strAge: string = prompt("Enter your age")
let Age: number = parseInt(strAge);

console.log("Hello ${name}, you are ${Age} years old.")