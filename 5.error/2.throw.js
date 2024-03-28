let json = '{age: 30}'

try {
    let user = JSON.parse(json)
    //user && console.log(user.age)
    if(user) console.log(user.age)
    else throw new SyntaxError('user가 없습니다.')
} catch(e) {
    if (e instanceof SyntaxError)
        console.log('ERROR] ' + e.message)
    else throw e //node.js에게 떠넘긴다.
}