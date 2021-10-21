function ksp_man() {
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
            this.name = "Jebediah"
            this.age = 20
            this.profession = "pilot"
            this.badS = true
        }
    }

    class Bill extends ksp_person {
        talk() {
            this.name = "Bill"
            this.age = 18
            this.profession = "Engineer"
            this.badS = false
        }
    }

    class Bob extends ksp_person {
        talk() {
            this.name = "Bob"
            this.age = 21
            this.profession = "Scientist"
            this.badS = false
        }
    }

    class Valentina extends ksp_person {
        talk() {
            this.name = "Valentina"
            this.age = 23
            this.profession = "pilot"
            this.badS = false
        }
    }

    console.log
}