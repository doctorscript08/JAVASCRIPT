function factorial(n) {
    let fact = 1

    for (let c = 1; c <= n; c++) {
        fact *= c
    }
    return fact
}

console.log(factorial(5))