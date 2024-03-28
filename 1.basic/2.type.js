/* string */
let foo = "I am a string"  // "I am a string"문자열에 foo 라는 이름을 붙인다. (declare)
foo = 'So am I'          // foo라는 이름의 문자열을 'So am I'로 덮어쓴다.
foo = `back tick`        // double quotation, single quotation, back tick

foo = 'He said, "javascript is awesome"'  // quotation 안의 quotation에서의 문자는 평범한 문자이다.
foo = "He said, \"javascript is awesome\""  // 백슬래시 기호로 특수문자를 일반문자로 전환할 수 있다.(unix 코드)

/* number (float, int) */
foo = 1
foo = 1.0

console.log(1 / 0)       // infinity ==> 오류를 나타내는 데이터이다.
console.log('a' / 1)     // NaN ==> Not a Number (숫자가 아님을 알려주는 오류 데이터이다.)

foo = 1
console.log(isFinite(foo))  // 유한수임의 여부를 묻는다.(number type의 data를 받아들이고 boolean(ex.true or false)의 data를 출력한다.)

foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo) + 1)

foo = 'a'
foo = '100px'              // CSS의 width height 값 등을 변환하는 브라우저로부터 기인한 언어이다.
foo = '+1'                 // 특수문자이다.
foo = '-1'
foo = '123456-7890123'    // 하이픈 앞의 문자까지만 잘라낸다.
console.log(parseInt(foo))

foo = '1.6'   // string type? number type? float type?
console.log(parseInt(foo))  // 내림처리하는 것을 선택한다.
console.log(parseFloat(foo))

let a = Infinity * 2   // return value는 Infinity이다.
let b = NaN * 2        // return value는 NaN이다.
console.log(a, b)

a = Infinity * NaN
console.log(a)

foo = 1n               // 좀 더 많은 bit을 사용하여 1을 표현한다. 끝에다가 n을 붙인다.

/* boolean (true and false) */
const okay = true
const fail = false  // quotation mark가 없으므로 string이 아니다.

let val = null     // 고유의 값이다. (0과 가깝기는 하지만 0이 아니다.)

let val2
console.log(val2)  // data라면 할당이 가능할 것이다. (콘솔로 log해라. 객체지향적이다.)
val2 = undefined

let id = Symbol('id')
console.log(typeof id)

/* casting (data type을 바꾼다.) */

val = 1
val = String(val)
console.log(typeof val)

val = '6' / '2'
console.log(val)

val = false / true   // 0 / 1로 casting된 것이다.
console.log(val)

val = '1'
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
console.log(Number(' '), Number(''), Number(null), Number(false))   // 숫자가 있는 것이 아닌 어떠한 경우에도 Number API는 0으로 처리한다.
console.log(Number('a'), Number(undefined), Number(NaN), Number(Infinity))

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' '), Boolean(Infinity))  // 있는 data로 취급한다.
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(NaN), Boolean(undefined))   // 0과 empty string, null, NaN, undefined는 Boolean관점에서 data가 없다.
