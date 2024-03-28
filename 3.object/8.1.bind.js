let user = {
    userName: 'madonna',
    greet() {
        console.log(`I am ${this.userName}.`) //this는 있다.
    }
}

user.greet() //주어 객체가 첫 번째 parameter로 쓰이게 된다.

setTimeout(user.greet, 100)  //괄호가 없다. ==> 첫 번째 parameter로 지정한 callback을 queue에 등록한 후 100ms가 지나면 호출(call stack에 내보낸다.)한다.

setTimeout(() => user.greet(), 200) //queue에다 이름 없는 함수를 등록, 블록 부분이 실행되는 것이다.