console.log(Date())
console.log(typeof Date())

let date = new Date()
console.log(date)
console.log(typeof date)
console.log(date.toLocaleDateString())

date = new Date('2022-08-23T07:27:30.999Z')
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(
    date.getFullYear(),
    date.getMonth(), //(0 ~ 11까지 return 될 수 있다.)
    date.getDate(),
    date.getUTCHours(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
    date.getDay() //(0 ~ 6까지 나올 수 있다. 요일을 출력할 수 있다. 0은 일요일을 의미한다.)
)

/* timestamp */
console.log(date.getTime())
console.log(Date.now())

date = new Date(0) //시간의 기준을 설정한다.
console.log(date)

date = new Date(1000 * 60 * 60 * 24)//86400초
console.log(date)



