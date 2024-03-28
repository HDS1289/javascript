let life = {
    name: 'life',
    eat() {
        console.log(`${this.name} eat.`)
    },
    execrete() {
        console.log(`${this.name} execrete.`)
    }
}

let animal = {
    name: 'animal',
    move() {
        console.log(`${this.name} move.`)
    },
    __proto__: life
}

let bird = {
    name: 'bird',
    move() {
        console.log(`${this.name} fly.`)
    },
    __proto__: animal
}

let mammal = {
    name: 'mammal',
    move() {
        console.log(`${this.name} run.`)
    },
    __proto__: animal
}

bird.eat()
bird.execrete()
bird.move()


mammal.eat()
mammal.execrete()
mammal.move()

let msg
for(let key in bird) { //for ~~ in ~~ 구문은 key를 출력하라는 뜻이다. of가 들어가면 value를 출력하라는 뜻이 된다.
    let isOwn = bird.hasOwnProperty(key)
    msg = isOwn ? `Child's key: ${key}` : `Parent's key: ${key}`
    console.log(msg)
}