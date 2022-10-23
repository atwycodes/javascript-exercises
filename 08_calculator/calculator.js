const add = function() {
	console.log(arguments);
  let totalAdd = 0;
  for (let i = 0; i < arguments.length; i++) {
    totalAdd += arguments[i];
  }
  return totalAdd;
};

const subtract = function() {
	console.log(arguments);
  let totalSubtract = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    totalSubtract -= arguments[i];
  }
  return totalSubtract;
};

const sum = function(...args) {
  let sumArray = args[0]; //rest parameter is already an array. to call the multi-dimensional array, need to call the first index of rest parameter.
  console.log(sumArray);
  let totalSum = sumArray.reduce((first, last) => first + last, 0);
    return totalSum;
};

const multiply = function(...args) {
  let multiplyArray = args[0]; //rest parameter is already an array. to call the multi-dimensional array, need to call the first index of rest parameter.
  console.log(multiplyArray);
  let totalMultiply = multiplyArray.reduce((first, last) => first * last);
    return totalMultiply
};

const power = function(...args) {
	let totalPower = args.reduce((first, last) => first ** last);
    return totalPower;
};

const factorial = function(a) {
  let arrayFactorial = [];
  for (let i = 1; i <= a; i++) {
    arrayFactorial.push(i);
    console.log(arrayFactorial);
  }
  const totalFactorial = arrayFactorial.reduce((first,last) => first * last,1);
  return totalFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
