function sumAll (num1, num2) {
    let sum = 0;
    if (typeof(num1) === "string" || typeof(num2) === "string") {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else 
    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    } else if (num1 > num2)  {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
    } else {
        return "ERROR";
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
