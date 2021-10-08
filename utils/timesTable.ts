import * as promptSync from 'prompt-sync'
const prompt = promptSync();

export function timesTable() {
    let answer:number = 0;

    let whichStr:string = prompt("Which times table do you want to do? ");
    let which:number = parseInt(whichStr);

    console.log("Here is the times table for " + which)

    for (let i=0; i<13; i++) {
        let result:number = which * i;
        console.log(result)
        //need to add the '3 x 3 = 9' bit rather than just '9'
    }

}