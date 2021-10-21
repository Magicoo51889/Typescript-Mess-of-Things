export function ksp_man() {
    abstract class ksp_person {
        name: string;
        age: number;
        profession: string;
        badS: boolean

        constructor(name:string, age:number, profession:string, badS:boolean){
            this.name = name;
            this.age = age;
            this.profession = profession;
            this.badS = badS;
        }

        abstract talk():any

    }

    class Kerbonaut extends ksp_person {
        talk() {
            return "Name: " + this.name + ", Age: " + this.age + ", Profession: " + this.profession + ", is BadAss: " + this.badS
        }
    }

    const kerbonaut: ksp_person[] = [];
    kerbonaut.push(new Kerbonaut("Jebediah", 20, "Pilot", true));
    kerbonaut.push(new Kerbonaut("Bill", 21, "Engineer", false));
    kerbonaut.push(new Kerbonaut("Bob", 18, "Scientist", false));
    kerbonaut.push(new Kerbonaut("Valentina", 23, "Pilot", false))

    kerbonaut.forEach(a => {
        console.log(a.talk());
    });
}