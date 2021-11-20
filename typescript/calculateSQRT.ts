import * as promptSync from 'prompt-sync'
const prompt = promptSync();

export function calculateSQRT () {
    const inputStr = prompt("What do you want to square root? ")
    const input:number = parseInt(inputStr)

    let a:number = (input<((input/3)*input))
    let b:number = (input>((input/4)*input))

    if (a && b){
        let avg = (a+b)/2
    }
    
}
