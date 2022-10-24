const palindromes = function (str) {
    //regex
    let regex = /[\W_]/g; // \W is equivalent to [^A-Za-z0–9_]
    // [^A-Z] matches anything that is not enclosed between A and Z
    // [^a-z] matches anything that is not enclosed between a and z
    // [^0-9] matches anything that is not enclosed between 0 and 9
    // [^_] matches anything that does not enclose _

    let lowerRegStr = str.toLowerCase().replace(regex, ""); //replace whatever captured in regex with no-space
    let reverseString = lowerRegStr.split("").reverse().join("");

    // compare initial string vs reversed string
    if ( reverseString === lowerRegStr ) {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
