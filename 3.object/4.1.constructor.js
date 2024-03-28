/* factory function */
let makeUser = function(userName, age) {
    return {
        userName: userName,
        age: age
    }
}

makeUser = function(userName, age) {
    return {
        userName,  //key와 value간의 중복을 없앤 것이다.
        age
    }
}

console.log(makeUser('doris', 70))

function User(userName) {
    //this = {}  //plain object. 생성자가 실행될 때 this라는 객체가 자동 생성된다.
    this.userName = userName //plain object에 key를 추가하는 것으로 점 연산자를 표시하고, value를 추가하는 것으로 할당 연산자를 쓴다.
    this.greet = () => console.log(`I am ${this.userName}.`)
    return this //객체 그 자체를 return하는(넘기는) 것이다. 객체 그 자체를 전달받는 것이다.
}

//let user1 = user('bob') //return값으로 객체가 나오는 생성자이다.
user1 = new User('bob') //constructor를 call 할 때에는 'new'연산자로 call해야 한다. object를 새롭게 한다는 뜻이다. 객체가 생기는 것이다.
console.log(user1)

user1.greet() //객체 안에 있는 함수를 method라고 한다. user1이 인사를 한다.
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()  //process는 각각의 객체를 주소로 구별한다.

let str = String(1)
console.log(str)

str = new String(1)  
console.log(typeof str)

let human = new function() {  //익명 함수는 1회밖에 쓸 수 없다.
    this.humanName = 'meg'
    this.age = 27
}
console.log(typeof human, human.humanName)
//
function BigUser() {
    this.userName = 'amy'
    return {userName: 'beth'}  //별도의 객체??? ==> 또 다른 객체를 return하는 것이 가능하다. parameter가 거짓일 때 유용하다.
}

function SmallUser() {
    this.userName = 'lorie'  //new라는 연산자가 없을 때는 return 할 때 다른 객체가 없으므로 오류(error)를 일으킨다.
    return this //this가 아닌 다른 객체를 return하는 것에 대비할 수 있다.
}

console.log(new BigUser().userName, new SmallUser().userName) //new라는 명령문을 쓰지 않았을 때에는 plain object(this = {})가 생성이 되지 않는다.

console.log(BigUser().userName, SmallUser()?.userName) //optional chaining을 사용하였더니 undefined로 출력된다. ==> app이 오류가 나지 않게 한 것?????

//this. 에서 undefined가 나온 것이다. (plain object)

const user = new Object()
user.age = 12
console.log(user.age)
console.log(user)

/* view object */ // 정보보안기능에 유효하다.
const person = Object.create(user)  //person은 view object이다. 'Object.create(객체)'를 통해 관계를 맺은 것이다.(일방향 관계이다.)
console.log(person)
console.log(person.age)
console.log(person == user)

person.personName = 'mandarin'
console.log(user)
