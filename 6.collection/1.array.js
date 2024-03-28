let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr) //여러 개의 property를 담고 있다.

arr = [null, undefined, NaN]
console.log(arr)

//
arr = []
arr[0] = 'a'
arr[2] = 'c' //array는 index가 key로 쓰인다. ==> key는 자동 생성된다.

console.log(arr)
console.log(arr[0])
console.log(arr[1])

console.log(arr.length)

//
let matrix = [
    [1, 2],
    [3, 4]
]

let a = [1, 2] //생성자의 parameter로 array를 생성한 것이다.
let b = [2, 3]
let c = a.concat(b) //read한 data를 모아서 새로운 array를 만들어서 반환한다.
console.log(c)

/* stack: FILO == LIFO */

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.pop())
console.log(arr)


/* queue FIFO == LILO */
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift())
console.log(arr)

//
arr = [1, 2, 3]
arr.reverse() //원소들의 순서를 바꾸는 것이다.
console.log(arr)

//
a = [0, 1, 2] //reading 만 한 것이다.
b = a.slice(1)
console.log(b, a)

//
arr = [0, 7, 8, 5]
arr.splice(0, 2, 1, 2, 3, 4) //잘라낸 자리에 값을 끼워넣는다.
console.log(arr)

//
arr = ['a', 'b', 'c'] //삭제가 된 것이다.(write, delete)
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b')) //값은 추가하고 있지 않다.
console.log(arr)

arr = ['a', 'b', 'c']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort() //arr을 write하는 것이다.
console.log(arr, s)
console.log(arr == s) //view object???

arr = [8, 11, 22, 23, 9] //문자를 정렬하는 방식으로 이루어졌다.
//arr = ['8', '11', '22', '23', '9']
console.log(arr.sort())

console.log(arr.sort((a, b) => a - b))
console.log(arr.sort((a, b) => b - a))

/* iterating */

arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

for(let e of arr) console.log(e) //가독성이 좋다. of를 사용하였으므로 value가 출력된다.

for(let key in arr) console.log(key) //index number(key) 자체를 출력한다.

for(let key in arr) console.log(arr[key])

/* forEach() */
function print(e) {
    console.log(e)
}

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) { //주어 객체가 parameter로 들어간다.
    arr[i] = e.toUpperCase() //원소를 하나 바꾸면 그 원소를 대문자로 변환한 다음 array에 할당한다.
}

arr = ['a', 'b']

console.log()
arr.forEach(print) //callback으로 parameter를 할당한다.

arr.forEach(print2)

arr.forEach(print3) //주어 객체를 건드림으로써 각각의 원소에 대한 속성을 바꿀 수 있다.
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2) //작업이 다 끝난 후에 원래 객체(arr)를 확인했을 때 바뀌지 않은 것을 볼 수 있다. ==> reading
console.log(arr, arr2, arr == arr2) //새로운 array객체를 반환한 것이다.

// namespace (공간에다 이름을 붙였다.)
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName => 
            console.log(this.title, ':', studentName))
    }
}

group.list()

/* array -> string */
arr = ['hello', 'world', 2]
let greeting = arr.join() //join이 주제이다. array안의 원소를 comma구분자와 결합하여 string type data로 casting한다.
console.log(greeting, typeof greeting)

console.log(arr.join('/')) //구분자를 명시한다.
console.log(arr.join('')) //empty string

//
arr = [1, 2, 3]
str = arr.toString()
console.log(str, typeof str)

//
str = String(arr)
console.log(str, typeof str)

//
str = JSON.stringify(arr)
console.log(str, typeof str)

const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]

const item = items.find(item => item.itemName == 'book')
console.log(item)

const interest = items.filter((item, i) => item.itemName == 'book')
console.log(interest)

const elements = items.map((item, i) => 
    `<div>${item.itemName}: ${item.price}</div>`)
console.log(elements)

const totalPrice = items.reduce((total, item) => {
            total += item.price
            return total
        }, 0)

console.log(totalPrice)


//
let isExit = items.some(item => item.itemName == 'book')
//console.log(isExit)

isExit = items.every(item => item.itemName == 'book')
console.log(isExit) //false가 출력된다. computer가 있기 때문이다.