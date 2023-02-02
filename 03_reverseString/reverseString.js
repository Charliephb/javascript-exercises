const reverseString = function(string) {
    let splitString = string.split('');
    let reverseArray = splitString.reverse();
    let jointArray = reverseArray.join('');
    return jointArray;

};

// Do not edit below this line
module.exports = reverseString;
