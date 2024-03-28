class CoffeeMachine {
    waterAmount = 0

    constructor(voltage) {
        this.voltage = voltage //instance variable
    }
}

console.log(CoffeeMachine)
console.log(Object.keys(CoffeeMachine)) //static type 요소를 출력한다.
console.log(CoffeeMachine.prototype)

let machine = new CoffeeMachine(220) //parameter는 voltage이다.
console.log(machine)

console.log(Object.keys(machine)) //instance에 존재하는 key이다.

machine.waterAmount = 1
machine.voltage = 100
console.log(machine)

//
CoffeeMachine = class {
    _waterAmount //get waterAmount를 통해 read하고 set waterAmount를 통해 write 할 것이다.(method name이다.)

    get waterAmount() {  //getter
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) { //setter
        this._waterAmount = 2 * waterAmount
    }
}

machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1 //setter를 call하는 것이다.
console.log(machine)
console.log(machine.waterAmount) //getter를 call한다.

machine._waterAmount = 11 //write한다.
console.log(machine._waterAmount)