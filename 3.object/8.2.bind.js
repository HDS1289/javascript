let user = {
    userName: 'leo'
}

function greet() {
    console.log(`I am ${this.userName}`)
}

greet()

let fn = greet.bind(user) //parameter로 정한 객체를 this variable에 할당한다. 
//(call은 call앞의 function을 호출한다.)bind가 호출될 시점에 function이 만들어진다.
fn()

//setTimeout(fn, 100)

user = {
    userName: 'john',
    greet() {
        console.log(`I am ${this.userName}`)
    }
}

fn = user.greet.bind(user)
//setTimeout(fn, 200)

console.log(fn == user.greet) //false가 출력되었다. ==> fn과 user.greet는 동일한 객체가 아니다.