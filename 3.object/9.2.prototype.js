let obj = {} //new Object가 생략된 것이다.

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

obj = new Object()
console.log(obj.__proto__)
console.log('Object: ', Object.prototype.__proto__)

console.log('obj: ', obj.toString())

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2) //표현을 달리 한 것이다.
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log('Array: ', Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)
console.log(arr2.toString()) //Array.prototype에는 toString() method가 이미 있다. ==> override된 것이다.

//
let one = new Number(1)
console.log(one.toString())

//
function User() {}
let user = new User()
console.log(user.toString())
console.log(obj.toString())
console.log(user.__proto__.__proto__ == obj.__proto__)