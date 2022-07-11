function removeFromArray (arrayInput,...args) {
    newArray = [];
    // use forEach to go through each element of the array
    // push every element into the new array
    // UNLESS it is included in the function arguments
    arrayInput.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    // return the new array
    return newArray;
} 

// alternative to .includes 
// let check = false;
// for(let i = 0; i < args.length; i++) {
//     if(args[i] == item)
//         check = true;
// return check;

// Do not edit below this line
module.exports = removeFromArray;
