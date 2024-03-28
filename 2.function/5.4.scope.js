let userName = 'neo'
sayHi()

function sayHi() {
    console.log('Hi', userName)
}

sayHi()

//sayHello()  //변수의 초기값이 할당(초기화)되지 않았다. ==> interpret하는 과정에서 오류가 발생한다.

//function expression
const sayHello = function() {
    console.log('Hello', userName)
}

sayHello()