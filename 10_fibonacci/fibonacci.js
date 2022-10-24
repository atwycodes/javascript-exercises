const fibonacci = function(input) {
    let n = parseInt(input);
    
    if (n <= 2 && n > 0) {
        let result = 1;
        return result;
    } else if (n > 2) {
        let fibonacciArray = [1,1]
        for (let i = 2; i < n; i++) {
            let newValue = fibonacciArray[i-2] + fibonacciArray[i-1]
            // console.log(newValue);
            fibonacciArray.push(newValue);
        }
    // console.log(fibonacciArray[n-1]);
    return fibonacciArray[n-1];
    } else {
        return ("OOPS");
    };
}



// Do not edit below this line
module.exports = fibonacci;
