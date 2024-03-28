let range = {
    from: 1,
    to: 3,

    [Symbol.iterator]() {
        this.current = this.from
        return this
    },
    
    next() {
        if(this.current <= this.to)
            return {
                done: false,
                value: this.current++
            }
        else
            return {
                done: true
            }
        
    }
}

for(let num of range)
    console.log(num)
//
function* generator() { //itrating할 때 [Symbol.iterator] ==> next함수를 반복적으로 사용했어야 했다.
    let val = 1
    while(val <= 3) yield val++ //generator function이 추가된 것이다. 시작값이 1, 끝 값이 3이 된다.
}

for(let num of generator()) { //iterable object를 return한다.
    console.log(num)
}

let g = generator()
console.log(g, ',', typeof g)
console.log(g.next())//{ value: 1, done: false} //node.js에는 현재 버전 기준으로 next method가 기본적으로 작동되어야 한다.
console.log(g.next())//{ value: 2, done: false}
console.log(g.next())//{ value: 3, done: true}
console.log(g.next())//{ value: undefined, done: undefined}

//
function* gen() {
    yield 1
    yield ['a', 'b']
    yield function() {}
}

for(let val of gen())
    console.log(val)

//
function* gen2() {
    yield* generator()
    yield* ['a', 'b']
    yield 9
}

for(let val of gen2())
    console.log(val)