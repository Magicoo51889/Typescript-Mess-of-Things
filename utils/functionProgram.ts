
export function functionProgram(){
    function whichIsLarger (a:number,b:number) { // This is a bit hideous but it is more convinent
        if (a>b) {
            return a
        } else {
            return b
        }
    }
    
    console.log(whichIsLarger(4,5) == 5)
    console.log(whichIsLarger(7,3) == 7)
    console.log(whichIsLarger(1,8) == 8)
    console.log(whichIsLarger(45,57) == 57)
}
    

