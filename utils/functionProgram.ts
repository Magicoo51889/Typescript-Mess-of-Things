import { couldStartTrivia } from "typescript"

export function functionProgram(){
    function whichIsLarger (a:number,b:number) { // This is a bit hideous but it is more convinent
        if (a>b) {
            return a
        } else {
            return b
        }
    }

    function boolLogic(a) {
        if (a) {
            console.log("True")
        } else {
            console.log("The test has failed")
        }
        
    }
    
    boolLogic(whichIsLarger(4,5) == 5)
    boolLogic(whichIsLarger(7,3) == 7)
    boolLogic(whichIsLarger(1,8) == 8)
    boolLogic(whichIsLarger(45,57) == 57)

}
    

