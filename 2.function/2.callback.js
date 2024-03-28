function sayOdd(num) {
    console.log(`${num} is an odd number.`)
}

function sayEven(num) {
    console.log(`${num} is an even number.`)
}

function lookNum(fn1, fn2) {  //선언된 함수를 쓰는 것이다.
    const num = parseInt(Math.random() * 10) + 1  //1이상 11이하의 수를 할당하는 것이다.
    if(num % 2 != 0) fn1(num)   // 홀수이다.
    else fn2(num)               // 짝수이다.           
}


lookNum(sayOdd, sayEven) //함수명을 호출하는 것이다.

function sayOdd2(num) { 
    console.log(`${num}은 홀수입니다.`)
}

function sayEven2(num) {
    console.log(`${num}은 짝수입니다.`)
}

lookNum(sayOdd2, sayEven2)

//
let chef1 = function(food) {
    return `달콤한 ${food}.\n`
}

let chef2 = function(food) {
    return `매운 ${food}.\n`
}

let waiter = function(food, chef) {  //callback. chef1이나 chef2를 호출하는 것이다.
    return chef(food)
}

console.log(waiter('짜장면', chef1),
            waiter('짜장면', chef2),
            waiter('짬뽕', chef2))