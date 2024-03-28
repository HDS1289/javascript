function sum(a: number, b: number): number {
    return a + b
}

console.log(sum(1, 2))

function add(a: number, b: number, isDouble: boolean): number { //add ==> number, number, boolean
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result = add(1, 2, true) //add ==> number, number, boolean
console.log(result)

function greet(userName: string, nullable?: boolean) {
    if(nullable) return null
    else return `Hello, ${userName}`
}

let greeting = greet('cain')
greeting = greet('cain', true) //userName에서는 null이 return된다.
console.log(greeting)