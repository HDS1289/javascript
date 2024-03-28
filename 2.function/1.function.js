function greet() {
    console.log('hello')
}

greet()  // return 명령문 자체가 없다.

let salute = function() {
    console.log('hi')
}
salute() // function type의 data가 읽어지고 calling이 수행된다.
// variable data에 할당 연산자를 사용하면 data를 writing 하는 것이다.
// variable만 있는 경우에는 data를 reading 하는 것이다.
console.log(salute)

let sayHello = function(user, greeting) {
    return `${greeting}, ${user}`       //string type의 data를 client(caller) 에게 return 한다.
}  //variable의 scope는 블럭 안쪽까지이다.
console.log(sayHello('rebecca', 'hello'))  //return 값이 있을 것을 기대하고 call한다.

let hello = function(greeting) {
    return `${greeting}`
}
console.log(hello('HI'))

let vow = function() {
    console.log('HI')
}
vow()  //다른 인사말에는 적용할 수 없어서 확장성 (유지보수를 덜 하기 위한 것)이 떨어진다.

/* let sayHi = function(greetings) {
    console.log(greetings)
}
sayHi('Hola') */

const sayHi = function(greetings) {
    console.log(greetings)
}
const say = sayHi  //function data를 copy(복사)한 후에 say에 할당한다. sayHi data는 남아 있다.
sayHi('안녕')      //안녕
say('HI')          //HI

//
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

(function() {
    console.log('earth')
})()

//
let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() {
    return 'moon'  //parameter값이 들어가는 것으로 복사된다.
})

let argFn = function() {
    return 'star'
}
myFn(argFn)  //선언된 parameter 갯수에 맞춰서 call한다.

let showMsg = function(from, msg = 'no message') {  //default parameter
    console.log(`${from}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
showMsg('trinity')  // undefined는 low level에서 쓰이는 기본값이다.


