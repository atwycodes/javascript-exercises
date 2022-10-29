const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    const oldest = array.reduce((previous,current) => {
        let previousAge = ("yearOfDeath" in previous) ? (previous.yearOfDeath - previous.yearOfBirth) : (currentYear - previous.yearOfBirth);        
        let currentAge = ("yearOfDeath" in current) ? (current.yearOfDeath - current.yearOfBirth) : (currentYear - previous.yearOfBirth);

        return (previousAge > currentAge) ? previous : current;
    });
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;