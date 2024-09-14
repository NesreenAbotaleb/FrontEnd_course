function mod(num , divisor){
    //num = divisor * q + r
    
    let q = Math.floor(num / divisor)

    return (num - divisor * q);
}

function scale(num1 , num2){

    return(num1 * num2);
}

function division(num1 , num2){

    return(num1 / num2);
}

function add(num1 , num2){
    return (num1 + num2);
}

function minus(num1 ,num2){
    return (num1 + num2);
}

let num = 15;
let divisor = 4;
let num1 = 6 ;
let num2 = 10;

console.log(`${num} % ${divisor} = ` + mod(num , divisor));
console.log(`${num1} + ${num2} = ` + add(num1 ,num2));
console.log(`${num1} - ${num2} = ` + minus(num1 ,num2));
console.log(`${num1} * ${num2} = ` + scale(num1 ,num2));
console.log(`${num1} / ${num2} = ` + division(num1 ,num2));
