let add = function(a, b) {
    return a + b
}

add = (a, b) => a + b

console.log(add(1, 2))

const double = (n) => 2 * n
console.log(double(2))

const greet = () => console.log('hello') //parameter가 없는 arrow function이다. 블록 명령어는 필수이다.
greet()

plus = (a, b) => {
    const result = a + b
    return result
}
console.log(plus(1, 2))