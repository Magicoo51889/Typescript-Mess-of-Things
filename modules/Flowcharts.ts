import * as promptSync from 'prompt-sync'
const prompt = promptSync();

export function flowchart1() {
    let botName:string = "susan"
    let botFrom:number = 2210
    let botAge:number = 20

    console.log("Hello my name is " + botName + " from space");
    let userName = prompt("What is your name? ");
    console.log("Hello " + userName + " I am from the year " + botFrom + " and I am " + botAge + " years old");

    let userAgeStr = prompt("How old are you? ");
    let userAge:number = parseInt(userAgeStr);
    let userFutureAge:number = userAge + (2210 - 2020);

    console.log("Wow! By 2210 you would be " + userFutureAge + ". That is really old!")
} 