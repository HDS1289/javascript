let promise = new Promise((resolve, reject) =>
    setTimeout(() => reject('hello'), 1000)) //위에서부터 차례대로 interpreting하는 것이 원칙이다.

promise.catch(result => console.log(result)) // hello 

console.log(promise) // Promise{ <pending> }

setTimeout(() => console.log(promise), 1100) // Promise { <rejected> 'hello' }

//
promise = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('world'), 2000)))

promise.then(result => console.log(1),
            result => console.log(result))

//
promise = new Promise((resolve, reject) =>
        setTimeout(() => {throw new Error('king')}, 3000))

promise.catch(console.log) //catch의 부분은 실행이 되지 않는다.