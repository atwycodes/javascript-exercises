function repeatString(string, num) {
    // string = 'hey'// prompt("Enter the word");
    // num = 3 //parseInt(prompt("Enter the amount of times to repeat"));
    if (num < 0) {
        return "ERROR"
    } else {
    return string.repeat(num);
    }
}


// Do not edit below this line
module.exports = repeatString;
