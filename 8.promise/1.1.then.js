let promise = new Promise((resolve, reject) => //callback이 executer가 된다. resolve와 reject는 직접 만든 적 없다. variable로 선언했을 뿐이다.
    setTimeout(() => resolve('hello'), 1000))//1초라는 시간이 걸리는 작업. resolve(node.js가 만들어서 넣어준다.)라는 function을 이용하는 작업.
console.log(promise)

setTimeout(() => console.log(promise), 1000)//첫 번째 parameter로 지정한 function을 queue에 등록한다. 1초 후에 queue에 등록한 명령어를 실행한다.

// consumer, handler
promise.then(result => console.log(result)) //resolve가 되자마자 작동한 것이다. then은 promise에 callback으로 등록하였다. promise에 handler를 등록한다.
//promise가 이루어진 후 이익을 받을 권리가 있는 consumer(handler)이다.