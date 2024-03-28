class CoffeeMachine {
    #waterAmount

    get waterAmout() {
        return this.#waterAmount + 100
    }

    set waterAmout(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

let machine = new CoffeeMachine()
console.log(machine)

machine.waterAmount = 1
console.log(machine.waterAmount)

//machine.#waterAmount = 1 //Syntax error(private) 접근하지 못하게 한다. ==> 캡슐화가 이루어지고 있다.
