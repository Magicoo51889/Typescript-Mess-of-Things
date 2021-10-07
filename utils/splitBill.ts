import * as promptSync from 'prompt-sync'
const prompt = promptSync();

export function printBill() {
    console.log("Hi there! I'm going to split the bill for you!")

    let billInputStr = prompt("How much was the bill? ")
    let numberOfPeopleStr = prompt("How many people are there? ")
    let tipPercentageStr = prompt("What tip would you like to leave? ")

    let billInput:number = parseInt(billInputStr)
    let numberOfPeople:number = parseInt(numberOfPeopleStr)
    let tipPercentage:number = parseInt(tipPercentageStr)

    let tipDeciaml:number = tipPercentage / 100
    let tipTotal:number = billInput * tipDeciaml
    let billTotal:number = billInput + tipTotal

    let costPerPerson = billTotal / numberOfPeople

    console.log("The bill including the tip is " + billTotal)
    console.log("The cost per person is " + costPerPerson)
}

