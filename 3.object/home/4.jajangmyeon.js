/* function Chef1(foodName) {
    
}

function Chef2(foodName) {
    
}

function Waiter(foodName, chef) {
   
}

let chef1 = new Chef1()
let chef2 = new Chef2()
let waiter = new Waiter()

waiter.Chef() */

function Food(taste, foodName) { //method가 없다
    this.taste = taste
    this.foodName = foodName
}

function Chef(taste) {
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName) //waiter가 요리사에게 하는 주문이다.
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)

console.log(waiter.order('짬뽕', chef2))
