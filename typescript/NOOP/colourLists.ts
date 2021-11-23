import * as promptSync from 'prompt-sync';
const prompt = promptSync();

export function rainbowList() {
    const colours: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

    console.log("...Printing the colours in a rainbow...")
    
    for (let i=0; i++;) {
        console.log(colours[i]);
    }

    console.log("Finsihed")
}

export function simonSays() {
    const actions: string[] = ["Hands on head", "Hands on ears", "Right hand up", "Left hand up", "Hands on shoulders"]

    let pickStr: string = prompt("Pick a number between 1 and " + actions.length + ": ");
    let pick: number = parseInt(pickStr);

    let instruction = actions[pick]
    console.log("Simon says ... " + instruction)
}