let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2) //하루 차이가 난다 ==> 86400000초 차이이다. number로 자동 casting된 것이다.

let user = {
    userName: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) { //가독성이 가장 좋다.
        return hint == 'string' ? this.userName : this.age
    }
}

let user2 = {
    age: 30,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`)
console.log(user > user2)  //20은 30보다 크다 ==> false
console.log(user + 50)
console.log(user2 + 50)

user = {
    userName: 'neo',
    age: 11,
    toString() {
        return this.userName
    }
}

console.log(user + '')

user.valueOf = function() {
    return this.age
}

console.log(user + 180)

/* 1. object의 [Symbol.toPrimitive](hint)
2. X, hint == 'string', toString(), valueOf()
3. X, hint == 'number || default', valueOf(), toString() */

userStr = JSON.stringify(user) //객체로 출력되지만 생성자가 없다. string type data로 출력된다.
console.log(userStr)