let promise = new Promise((resolve, reject) => 
    setTimeout(() => resolve(10), 1000))

promise.then(console.log(1)).then(console.log(2))//call하고 있는 형태로 출력된다.

promise.then(result => { 
    console.log(result) //10이 출력된다.
    return ++result //값을 증가시킨 다음에 return 한다.
}).then(result => {
    console.log(result) //11이 출력된다.
    return ++result
}).then(console.log) //12가 출력된다.

//
promise = new Promise((resolve, reject) =>
    setTimeout(() => resolve('complete'), 2000))

promise.then(console.log)
    .catch(e => console.log(e.message))
    .finally(() => console.log('finally'))
