export function square (n:number, j:number, i:number) {
    let middle = (i+j) / 2;
    let multiplied = middle * middle;
    if ((multiplied === n) || (Math.abs(multiplied - n) < 0.00001)){
        return middle;
    } else if (multiplied < n){
        return square(n, middle, j);
    } else {
        return square(n, i, middle);
    }
    
}

export const findSqrt = num => {
    let i = 1;
    const found = false;
    while (!found){
       if (i * i === num){
          return i;
       } else if (i * i > num){
          let res = square(num, i - 1, i);
          return res;
       };
       i++;
    }
 }

