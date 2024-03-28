function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) //callback함수와 지연되는 시간이다.

function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox') //parameter => 출력할 함수(callback), 지연시간, phrase, who순으로 입력한 것이다.

let timeId = setTimeout(() => console.log('hoo'), 3000)
//clearTimeout(timeId)