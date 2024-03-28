class Food {
    constructor(taste, foodName) {
        this.taste = taste
        this.foodName = foodName
    }

    toString() {
        return `${this.taste} ${this.foodName}`  //[Symbol.toPrimitive]() {} ==> toString() {} ==> valueOf() {}
    }
}

class Chef { //상속 관계와 단독 관계란????
    constructor(taste) {
        this.cook = foodName => new Food(taste, foodName)
    }
}

class Waiter {
   order(foodName, chef) {
    return chef.cook(foodName)
   }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

console.log(waiter.order('짜장면', chef1) + '')
console.log(waiter.order('짜장면', chef2) + '')

