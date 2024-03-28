class User {
    constructor(userName) {  //생성자의 또 다른 문법이다. sugar syntax
        this.userName = userName
    }

    sayHi() {
        console.log(`Hi, I am ${this.userName}`)
    }
}

let user = new User('john')
console.log(user.userName)
user.sayHi()

//User('john') //class의 생성자는 new 연산자 없이 call할 수 없다.

class Animal {
    constructor() {
        this.animalName = 'animal'
    }

    run() {
        console.log(`${this.animalName} run.`)
    }

    stop() {
        console.log(`${this.animalName} stop.`)
    }
}

let animal = new Animal()
console.log(animal.animalName)
animal.run()
animal.stop()

//
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi() //객체가 만들어진다.