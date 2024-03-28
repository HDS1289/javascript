let animal = {
    isAlive: true
}

function Rabbit(rabbitName) { //생성자로 토끼 한 마리와 그 이름을 설계한다.
    this.rabbitName = rabbitName
}

console.log(Rabbit.prototype)

let rabbit = new Rabbit('black') //new 연산자(예약어)로 토끼 한 마리를 생성한다.
console.log(rabbit.rabbitName)
console.log(rabbit.isAlive)

//
Rabbit.prototype = animal
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)

//
function Duck(duckName) {
    this.duckName = duckName
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__)
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__) //하나의 생성자를 통하여 만든 것이기 때문에 복사된 주소값도 동일하다.

let duck3 = new duck.__proto__.constructor('duck') //생성자를 찾아가는 것이다.
duck3 = new duck.constructor('duck')