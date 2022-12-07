const removeFromArray = function() {
    const array = args[1,2,3,4];
    const item = 3
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push[item];
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
