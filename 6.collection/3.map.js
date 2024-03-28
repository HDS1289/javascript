let map = new Map()

map.set('1', 'hello') //첫 번째 param은 key, 두 번째 pamra은 value이다.
map.set(1, {userName: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true))

console.log(map.has('1'), map.has(1), map.has(true), map.has(false))
console.log(map.size) //arr의 length와 유사하다.

console.log(map.delete(1))//delete에 성공하면 true, delete에 실패하면 false가 출력 ==> if문과 결합할 수 있다.
console.log(map)

console.log(map.delete(2))
console.log(map)

map.clear()
console.log(map)

//
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(map)

/* iterating */

let greens = new Map([
    ['cucumber', 500], //첫 번째 원소는 key, 두 번째 원소는 value가 된다.
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens) {
    console.log(entry)
}

let keys = greens.keys()
console.log(keys)//spread말고 표현할 수 있는 것은???

for(let key of keys) console.log(key)

let values = greens.values()
console.log(values)

for(let value of values) console.log(value)

greens.forEach((val, key) => console.log(key, val))

/* object -> entries -> map */

let user = {
    userName: 'aiden',
    age: 50
}

let entries = Object.entries(user)
console.log(entries)
console.log(new Map(entries))

/* map -> object */

map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

let fruits = Object.fromEntries(map)
console.log(fruits)