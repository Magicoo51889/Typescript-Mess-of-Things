abstract class ksp_man {
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

class Jeb extends ksp_man {
    talk(){
        this.name = "Jebediah"
        this.age = 
    }
}