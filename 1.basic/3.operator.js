/* arithmetic operator */
let val = 1 + 2 * 3 / 2  // 할당 연산자까지 포함한다. (곱하기 ==> 나누기 ==> 더하기 ==> 할당 순으로 진행된다.)
console.log(val)
console.log(val, 5 % 2,  4 ** 2, 4 ** (1/2))   // 업무나 일상에서는 더하기를 가장 많이 하게 된다.

let i = 1 //i++
//console.log(++i, ++i, i++)  // 로그가 처리하는 방식에서 차이가 생긴다.
//i += 1
i = i + 1
console.log(i)

/* concatenation */
let foo = 'hello'  // variable의 타입은 interpreting이 되고 나서 variable의 타입이 결정된다.
let bar = 'world'
let word = foo + ' ' + bar
console.log(word)

console.log(1 + '2', '1' + '2')  // expression에서 피연산자가 string이 한 개 이상이라도 있으면 '+'연산자는 붙이기가 된다.

// unary plus operator
console.log(1 + + '2')   // 명시적으로 number로 casting하라는 뜻이다.

/* logical operator */
console.log(1 || 0, 0 || 1)  // 빠른 'or'는 true data를 읽는 순간 끝낸다.
console.log(1 && 0, 0 && 1)  // false data 중에서 false data를 읽는 순간 끝낸다.
console.log(1 && 2, 2 && 1)  // true data 중에서 마지막으로 읽은 data를 출력한다.

//let foo      //node.js가 넣어주는 undefined data이다.
//foo && do(foo)

/* assignment operator */
console.log()

let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)

/* comparison operator */
console.log()
console.log('2' > 1, '01' == 1, false == 0, '0' == 0, '' == false)   // 2(string 2에서 casting된 것이다.)가 1보다 크다는 것은 참인 문장이다.
// javascript에서는 number type data가 우선된다.
console.log(true > 1)    // true가 1로 변환된 것이다. 1이 1보다 큰 것은 거짓이다.

/* equivalent */
console.log(1 == '1', 1 != '1')

/* identical */
console.log(1 === '1', 1 !== '1')  // datatype까지 같아야 한다. (physical하게 비교한다.)

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A')   // unicode number로 변환하여 비교한 것이다. 한 자리씩 비교한다.

console.log(null > 0, null >= 0, null == 0)     // null >= 0 은 특수한 예시이다.
console.log(undefined > 0, undefined >= 0, undefined == 0)
console.log(NaN > 0, NaN >= 0, NaN == 0)

console.log(undefined == undefined, null == null, NaN == NaN)