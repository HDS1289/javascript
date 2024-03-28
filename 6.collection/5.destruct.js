let arr = ['ilya', 'kantor']
let [firstName, lastName] = arr
console.log(firstName, lastName)

let [one, two] = [1, 2, 3]
console.log(one, two)

let [three, four] = [3]
console.log(three, four) //destructor는 queue 알고리즘을 작동시키고 있다. (선입선출법으로 data를 reading하고 있다.)

let [one2, , three2] = [1, 2, 3]
console.log(one2, three2)

//
let s = 'i am'
let [a, b, c] = s //i, space, a 순으로 담긴다.
console.log(a, b, c)

//
arr = s.split(' ')//parameter로 구분자가 들어오면서 token으로 조각 낸 것을 return한다.
console.log(arr)

let [a2, b2] = arr
console.log(a2, b2)

//
let user = {
    userName: 'oscar',
    age: 6
}

let entries = Object.entries(user)
console.log(entries)

for(let [key, val] of entries)
    console.log(key, val)

//
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest] //logical상으로 값을 교차하는 효과가 있다.
console.log(guest, admin)

//
let [x, y, ...rest] = [1, 2, 3, 4]
console.log(x, y, ...rest)

//
let [x2, y2 = 10] = [1]
console.log(x2, y2)

/* pattern */
let options = { //DOM object와 비슷하다.
    title: 'menu',
    height: 100,
    width: 200 //key와 variable name이 일치해야 한다.
}

let {title, height, width} = options
console.log(title, height, width);

({title, width, height} = options)
console.log(title, height, width) //평범한 destruction은 queue 알고리즘대로 실행한다. option에 있는 title은 자리를 잘 찾아갈 수 있다.

let {width: w, height: h} = options
console.log(w, h)

let {title: t, ...other} = options
console.log(t, other) //other부분은 object형태로 할당되었다.

let {title: subject, wide = 10} = options
console.log(subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200,
    },
    items: ['cake', 'donut'],
    extra: true
}

let {size, items} = bread //필요한 value에 대한 key만을 지정할 수 있다.
console.log(size, items)

//
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread

console.log(w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: t, items:[i1, i2]}) {
    console.log(t, i1, i2)
}

showMenu(menu)