function boolLogic(programName) {
    if (programName) {
        console.log("True")
    } else {
        console.log("The test has failed")
    }
    
}

export function functionProgram(){
    function whichIsLarger (a:number,b:number) { // This is a bit hideous but it is more convinent
        if (a > b) {
            return a
        } else {
            return b
        }
    }
    
    boolLogic(whichIsLarger(4,5) == 5)
    boolLogic(whichIsLarger(7,3) == 7)
    boolLogic(whichIsLarger(1,8) == 8)
    boolLogic(whichIsLarger(45,57) == 57)

}

export function hcfMain() {
    function hcfProgram(a:number,b:number) {
        while (a && b > 0) {
            if (a === b) {
                return a
            } else if (a > b) {
                a -= b
            } else {
                b -= a
            }
        }

    }

    boolLogic(hcfProgram(12,15) === 3)
    boolLogic(hcfProgram(28,35) === 7)
    boolLogic(hcfProgram(40,22) === 2)
    boolLogic(hcfProgram(60,48) === 12)
    boolLogic(hcfProgram(273,105) === 21)
}