export function properties() {
    interface Person {
        name:string;
        age:number;
        profession:string;
    }

    const person1: Person = {
        name: "Bob",
        age: 56,
        profession: "horse racer"
    }

    const person2: Person = {
        name: "Alice",
        age: 34,
        profession: "Engineer"
    }

    const person3: Person = {
        name: "David",
        age: 18,
        profession: "cobblesmith"
    }

    console.log(person1);
    console.log(person2)
    console.log(person3)
}