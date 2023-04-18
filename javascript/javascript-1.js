function sum(args) {
    if (typeof valueOf == "function") {
        valueOf = 0;
    }

    if (args !== undefined) {
        valueOf += args;
        return sum;
    } else {
        return valueOf;
    }
}

sum(1)(2); // 3
sum(3); // 6
console.log(sum(-2)(0)(1)()); // 5
sum(-2)(3); // 6
console.log(sum()); // 6
