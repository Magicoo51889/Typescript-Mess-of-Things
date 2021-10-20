interface ksp_man {
    name: string;
    age: number;
    profession: string;

    constructor(name:string, age:number, profession:string){
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    commitKSP() {
        console.log("${name}, ${age}, ${profession}");
    }


}

