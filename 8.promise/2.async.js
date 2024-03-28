async function fn() {
    return 1
}

let f = fn()
console.log(f) // return 한 값은 promise type이다.

f.then(console.log)

//
fn = async function() {
    return Promise.resolve(2)
}

fn().then(console.log)

//

fn = async function() {
    return Promise.reject(new Error(3))
}
fn().catch(e => console.log(e.message))

//await
fn = async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 1000)
    })
    let result = await promise //resolve되기 직전에 result값에 할당된 것이 없다.(promise.result) ==> await promise로 event발생을 기다리게 한다.
    console.log(result) //1초가 되기 전에 다 실행되는 것이다. async 블럭 내에서만 실행하는 것이다.
}
fn()

//
class Waiter {
    async order() {
        return await Promise.resolve('짜장면') //promise가 이행되고 나서 return이 실행된다.
    }
}

new Waiter().order().then(console.log)