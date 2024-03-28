class Animal {
    constructor(animalName) {
        this.animalName = animalName
    }

    run(speed) {
        this.speed = speed
        console.log(this.animalName, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.animalName, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)  //run을 호출 ==> speed property가 추가되었다.

animal.stop()
console.log(animal) //stop을 호출 ==> speed value가 0이 되었다.

//
class Rabbit extends Animal {  //토끼는 동물이다.(Rabbit is an Animal.) //부모 클래스에게 parameter를 넘긴다.
    constructor(animalName, color) { //constructor의 parameter로 지정된 것이 property로 들어가 있다.
        super(animalName)  //부모 클래스로 만들어진 객체이다.
        this.color = color
    }

    stop() {
        super.stop()
        this.color = color
    }

    hide() {
        console.log(this.color, this.animalName, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit', 'black')
console.log(rabbit)

console.log(rabbit.animalName)

rabbit.run(100)
rabbit.hide()