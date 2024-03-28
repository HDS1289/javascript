if(true) {}

if(false) {} else {}

if(undefined) {console.log('1')}  // 블럭 실행이 되지 않았다. undefined는 false로 변환된다.

if(null) {console.log('!')}

if(0) {console.log('!')}

if(-1) {console.log('!')}

/* tenary (3항 연산자) */
console.log(true ? 1 : 0)
//let s = true ? 1 : 0
if(true) {
    s = 1
} else {
    s = 0
}


console.log(s)

/* switch */
let val

switch('baz') {
    case 'bar' : val = 'bar'; break
    case 'baz' : val = 'baz'; break  // 블럭 내에서 흘러 내려오는 것을 멈추게 한다.
    default: val = 'all right'
}

console.log(val)