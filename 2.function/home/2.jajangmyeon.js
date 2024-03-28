let chef1 = food => `달콤한 ${food}\n`
let chef2 = food => `매운 ${food}\n`

let waiter = (food, chef) => {
    const result = chef(food)
    console.log(result)
}

waiter('짜장면', chef1)
