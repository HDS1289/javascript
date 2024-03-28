let user1 = { // new object() 라는 생성자를 줄인 것이다.
    userName: 'isabel',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

let user2 = {
    userName: 'jade',
    greet() {
        console.log(`I am ${this.userName}.`)
    }
}

user1.greet()
user2.greet()

//절차지향 ==> call???
let userName = 'morpheus'

function greet() {
    console.log(`I am ${this.userName}`)
}

greet()

greet.call(user1) //this라는 variable에 parameter로 객체를 넣어준다.
greet.call(user2)  //object도 데이터다.
//'call'은 'call'해야 하는 객체의 this variable에만 관심있다.

user2 = {
    userName: 'collin'
}

user1.greet()
//user2.greet()


user1.greet.call(user2) //'call'이라는 API를 이용한다.