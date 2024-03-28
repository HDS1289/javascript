class A {} //내부적으로 생성자를 가지고 있다.

class B extends A {} //~~는 ~~이다.(토끼는 동물이다.)

let a = new A() //instance type객체를 new 연산자를 통하여 생성한다.
let b = new B()//여러개의 type을 가지고 있다.

console.log(a instanceof A, a instanceof B, a instanceof Object) //JS모든 객체는 n개의 type을 가지고 있고 그 중 하나가 Object type이다.
console.log(b instanceof A, b instanceof B, b instanceof Object)

console.log(typeof a, typeof b)
console.log(typeof A, typeof B)