import * as promptSync from 'prompt-sync'
const prompt = promptSync();

export function calculateSQRT () {
    let inputStr = prompt("What do you want to square root? ")
    let input:number = parseInt(inputStr)
    let LB1:number = input - 1; 
    let UB1:number = input + 1;
    
    let esitmate:number = ((UB1*UB1)*0.32379)+((LB1*LB1)*0.67621)/2

    let guess:number = esitmate/(input * 2)
    console.log(guess)
    
}
