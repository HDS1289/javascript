let user = {userName: 'scott'}

let fn = () => 1
let arr = ['ucal', user, 'toby', fn, 'ucal', 1, 1, fn]

function refine(arr) {
    return Array.from(new Set(arr))
}

console.log(refine(arr)) //['ucal', {userName: 'scott'}, 'toby', [Function: fn], 1]