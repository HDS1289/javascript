/* class Food { homework failed again?????
    constructor(taste, foodName) {
        this.taste = taste
        this.foodName = foodName
    } failed the test?????

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
   async order(foodName, chef) {
    return await Promise.resolve(chef.cook(foodName))
   }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

console.log(waiter.order('짜장면', chef1) + '')
console.log(waiter.order('짜장면', chef2) + '')

serve = waiter.order().then(('짜장면', chef1) + '' ) */



/*class Food {
    constructor(taste, foodName) {
        this.taste = taste
        this.foodName = foodName
    }
}

class Chef {
    async cook() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(new Food(taste, foondName)), 1000)
        })
        let result = await promise
        return result
    }
}

class Waiter {
    constructor(taste) {
        this.cook = foodName => new Food(taste, foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter() */

class Food {
    constructor(taste, foodName) {
        this.taste = taste
        this.foodName = foodName
    }

    [Symbol.toPrimitive]() {
        return `${this.taste} ${this.foodName}`
    }
}

class Chef {
    constructor(taste) {
        this.taste = taste
    }

    cook(foodName) {
        return new Promise((resolve, reject) => {
                setTimeout(() => resolve(new Food(this.taste, foodName)), 3000) //약속의 이행 결과 음식이 생긴다.
        })
    }
}


class Waiter {
    async order(foodName, chef) { //chef한테 food를 요청한다. 음식 이름도 알려준다.
        return chef.cook(foodName)
    }
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

//consumer를 디자인한다.
waiter.order('짜장면', chef1).then(food => console.log(food + ''))
waiter.order('짬뽕', chef2).then(food => console.log(food + ''))