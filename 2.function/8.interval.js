let timeId = setInterval(() => console.log('tick'), 1000) //1초 간격으로 반복해서 호출하라.

setTimeout(() => {
    clearInterval(timeId)  //3초 후에 반복 호출을 멈춰라.(timeId는 setInterval이라는 함수가 할당된 변수이다.)
    console.log('stop.')
}, 3000)