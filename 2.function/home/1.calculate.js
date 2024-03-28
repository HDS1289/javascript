let calculate = function(a, b, op = '*') {
    let result

    switch(op) {
        case '-': result = a - b; break
        case '*': result = a * b; break
        case '/': result = a / b; 
    }

    return result
}

console.log(calculate('1', '2', '-'))
console.log(calculate('2', '2'))  //failed


//
function multiply(a, b) {
    return a * b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

let calResult = function(a, b, operator = multiply) {  // default value
    return operator(a, b)
}

console.log(calResult('4', '2'))
console.log(calResult('5', '-2', subtract))
console.log(calResult('-3', '5', divide))
console.log(calResult('5', '-5', subtract))

