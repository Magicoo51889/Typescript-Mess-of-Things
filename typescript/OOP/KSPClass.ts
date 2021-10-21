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

    class Jeb extends ksp_person {
        talk() {
            return "Name: " + this.name + ", Age: " + this.age + ", Profession: " + this.profession + ", is BadAss: " + this.badS
        }
    }

    class Bill extends ksp_person {
        talk() {
            return "Name: " + this.name + ", Age: " + this.age + ", Profession: " + this.profession + ", is BadAss: " + this.badS
        }
    }

    class Bob extends ksp_person {
        talk() {
            return "Name: " + this.name + ", Age: " + this.age + ", Profession: " + this.profession + ", is BadAss: " + this.badS
        }
    }

    class Valentina extends ksp_person {
        talk() {
            return "Name: " + this.name + ", Age: " + this.age + ", Profession: " + this.profession + ", is BadAss: " + this.badS
        }
    }

    const kerbonaut: ksp_person[] = [];
    kerbonaut.push(new Jeb("Jebediah", 20, "Pilot", true));
    kerbonaut.push(new Bill("Bill", 21, "Engineer", false));
    kerbonaut.push(new Bob("Bob", 18, "Scientist", false));
    kerbonaut.push(new Valentina("Valentina", 23, "Pilot", false))

    kerbonaut.forEach(a => {
        console.log(a.talk());
    });
}