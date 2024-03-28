/* symbol: unique */
let id = Symbol() //생성자(대문자로 시작한다.)
let id1 = Symbol('id')
let id2 = Symbol('id')  //모두 유일한 값으로 return된다.
console.log(id, id1, id2) //symbol타입의 data를 log가 보여주는 방식이다.

console.log(id == id2) //equal 두 개 연산자로 id1과 id2가 같은 지에 대한 여부를 판단한다. (false)
console.log(id.toString())
console.log(typeof id)

console.log(id1.description)
console.log(id.description)  //출력된 것은 property value일 뿐이다.
console.log(id2.description)

let user = {
    userName: 'neo'
}

let userId = Symbol('userId')
user.userId = 1  //data type은 string type이다.
user[userId] = 2 //variable의 경우 quotation이 안써진다. Symbol type ==> hidden property
console.log(user)

console.log(Object.keys(user))  //hidden property

for(let key in user) {
    console.log(key)
}

//유일하게 감추고 싶은 키를 사용해야 할 때 symbol key를 사용해야 한다.

/* global symbol */
id1 = Symbol.for('regNo')
id2 = Symbol.for('regNo')  //for로 만들어낸 symbol은 global symbol이다.
console.log(id1 == id2)

id1 = Symbol.for('regNo') //global scope
id2 = Symbol('regNo')     //local scope
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))