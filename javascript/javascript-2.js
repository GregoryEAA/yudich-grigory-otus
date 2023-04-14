var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}
var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})
async function promiseReduce(asyncFunctions, reduce, initialValue) {
    let v = initialValue;

    for (const func of asyncFunctions) {
        const f = await func();
        v = reduce(v, f);
    }

    return v;
}
promiseReduce(
    [fn1, fn2],
    function (memo, value) {
        console.log('reduce')
        return memo * value
    },
    1
)
    .then(console.log)
