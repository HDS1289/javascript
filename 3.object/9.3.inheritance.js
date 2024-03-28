let animal = {
    animalName: 'animal'
}

animal = new Object()
animal.animalName = 'animal'

let rabbit = {
    age: 3
}

//rabbit = new Rabbit() //constructor
rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(rabbit.animalName, rabbit.age)

rabbit.__proto__ = animal
console.log(rabbit.animalName, rabbit.age)

//
animal = {
    walk() {
        console.log('animal walk.')
    }
}

rabbit = {
    __proto__: animal  //토끼는 동물이다를 코드로 변환한 것
}

//rabbit is an animal.

rabbit.walk()

//
let user = {
    userName: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.userName)

administrator.userName = 'jonadan'
console.log(administrator.userName)

//
animal = {
    animalName: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.animalName} eat.`)
    }
}

rabbit = {
    animalName: 'rabbit',
    __proto__: animal
}

let lion = {
    animalName: 'lion',
    __proto__: animal
}

animal.eat()
rabbit.eat()
lion.eat() //this의 값에 변화를 주고 있다.

//
console.log(Object.keys(rabbit)) //prototype이라는 property는 보이지 않는다. 

for(let key in rabbit) {
    console.log(key)
}

let msg
for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    msg = isOwn ? `child's key: ${key}` : `parent's key: ${key}`
    console.log(msg)
}