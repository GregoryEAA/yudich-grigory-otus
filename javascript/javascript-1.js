let totalSum = 0;
const sum = (...arr) => {
    const currentSum = arr.reduce((a, b) => {
        return a + (+b || 0);
    }, 0);

    totalSum += currentSum;

    if(arr.length === 0) {
        return totalSum;
    }

    return currentSum;
};


console.log(sum(2, 2, 4, 1)); // 9
console.log(sum(1, 2, 3, -4, 6)); // 8
console.log(sum()); // 17
