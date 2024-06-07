function fib(num) {
    let result = []
    for (let i = 0; i < num; i++) {
        if (i === 0) result.push(i)
        else if (i === 1) result.push(1)
        else result.push(result[i-1] + result[i-2])
    }
    return result
}

console.log(fib(8)) // [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(num, arr = [0, 1]) {
    if (arr.length >= num) return arr
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    return fibsRec(num, arr)
}

console.log(fibsRec(8)) // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(10)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]