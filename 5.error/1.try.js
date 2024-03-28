let json = '{"userName": "john", "age": 30}'
let user = JSON.parse(json)
console.log(typeof json, typeof user)

json = '{age: 30}' //string type이다. 거짓된 데이터이다.
//JSON.parse(json)

try {
    JSON.parse(json)
} catch {
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) {
    console.log(e.name, '\n', e.message, '\n', e.stack)
}