export function piCalculator() {

    var INTERVAL = 1000
    let circlePoints = 0
    let squarePoints = 0

    function piCalculation(min, max) {
        for (let i=0; i < (INTERVAL * INTERVAL); i++) {

            let rand_x: number = Math.random() * (max - min) + min
            let rand_y: number = Math.random() * (max - min) + min

            let originDist = Math.sqrt(rand_x * rand_x + rand_y * rand_y)

            if (originDist <=1) {
                circlePoints += 1
            }

            squarePoints += 1

            let pi = 4 * (circlePoints / squarePoints)

            console.log("Final estimation of pi: " + pi);

        }
    }

    piCalculation(-1,1)

}