let set = new Set()

let user1 = {userName: 'john'} //set객체에서는 하나의 value로 취급한다.
let user2 = {userName: 'pete'}

set.add(user1).add(user2).add(user1) //value를 중복하고 있다. 마지막에 추가한 것은 무시한다. set은 key가 없기 때문에 value중복을 허용하지 않는다.
console.log(set)

//
console.log(set.size)
console.log(set.has(user1), set.has(user2), set.has({}))

//
console.log(set.delete(user1))
console.log(set)

/* iterating */

set.add(user1)

for(let user of set) console.log(user)

//set.forEach()
set.forEach(val => console.log(val)) //user를 출력하라?????

//
set = new Set([1, 2, 3])

console.log(set)

set = new Set('hello')
console.log(set)

/* set -> array */
let arr = Array.from(set)
console.log(arr)