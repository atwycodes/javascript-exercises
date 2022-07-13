function sumAll (num1, num2) {
    let sum = 0;
    if {

    } else if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            sum += i
            // console.log(`num1: ${num1}`);
            // console.log(`num2: ${num2}`);
            // console.log(`i: ${i}`);
            // console.log(`j: ${j}`);
        }
    } else if (num1 > num2)  {
        for (let i = num2; i <= num1; i++) {
            sum += i
            // console.log(`num1: ${num1}`);
            // console.log(`num2: ${num2}`);
            // console.log(`i: ${i}`);
            // console.log(`j: ${j}`);        
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
