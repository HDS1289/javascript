function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3)) //나머지 parameter는 무시한다. 두 개의 parameter만을 사용할 수 있다.

add = function(...args) {   //...는 parameter n개를 뜻하며, parameter의 array를 뜻한다.
    let tot = 0
    for(let arg of args) tot += arg  //collection을 대상으로 작동하는 문법이다.
    return tot
}

console.log(add(1), add(1, 2, 3))

function printName(firstName, lastName, ...titles) {
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)   //titles.length에서 titles는 객체이고, length라는 variable이 들어있다.

}

printName('Adam', 'Smith', 'operator', 'consul')

function showName() {
    console.log(arguments.length)  //rest parameter이다. '...arguments'가 생략되었다.
    console.log(arguments[0], arguments[1])
}

showName()
showName('Erica','Terry')

/* spread */
console.log(Math.max(1, 2, 3))

let arr = [1, 2, 3]
console.log(Math.max(arr))
console.log(Math.max(...arr))

let arr2 = [4, 5, 6]
console.log(...arr2)
//...을 안 쓰는 것으로 refactoring ==> indexing으로 refactoring 가능하다.
console.log(arr[0], arr[1], arr[2])

console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(...arr, ...arr2, 7, ...arr2, 8))

arr = [0, ...arr2, 9]
console.log(arr)