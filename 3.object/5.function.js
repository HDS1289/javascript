function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name)  //function object에 name이라는 property value
console.log(sayHi.length)

let user = {
    sayHi() {},
    sayBye() {}
}
console.log(user.sayHi.name) //변수가 있는 것은 data가 있는 것, 점은 객체를 찾아가는 것이다.
console.log(user.sayBye.name)

sayHi = function() {
    console.log('hi')
    sayHi.count++
}
sayHi.count = 0
sayHi()
console.log(`call count: ${sayHi.count}`)

