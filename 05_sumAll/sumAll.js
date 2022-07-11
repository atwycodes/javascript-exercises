let j = 0;

function sumAll (num1, num2) {
    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            j += i
            // console.log(`num1: ${num1}`);
            // console.log(`num2: ${num2}`);
            // console.log(`i: ${i}`);
            // console.log(`j: ${j}`);
        }
    } else if (num1 > num2)  {
        for (let i = num2; i <= num1; i++) {
            j += i
            // console.log(`num1: ${num1}`);
            // console.log(`num2: ${num2}`);
            // console.log(`i: ${i}`);
            // console.log(`j: ${j}`);        
        }
    }
    return j;
};

// Do not edit below this line
module.exports = sumAll;
