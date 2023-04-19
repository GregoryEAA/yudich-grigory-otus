function crtSum() {
    let sumAllArg = 0
    return function(arg) {
        if (typeof arg == "number") {
            return function(args) {
                if (args) {
                    return sum(arg + args)
                }
                sumAllArg += arg
                return arg
            }
        } else {
            return sumAllArg
        }
    }
}

const sum = crtSum()

console.log(sum(1)(2)()); // 3
console.log(sum(3)()); // 3
console.log(sum(-2)(1)()); // -1
console.log(sum()); // 5
