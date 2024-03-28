let i = 0
while(i < 2) {
    console.log(`while: ${i + 10}`)    //while 부분은 static, ${} 부분은 가변적이다.
    i++
}

do {
    console.log('do')   // 결과의 차이?? while은 블럭을 0번 이상 실행한다. do while은 1번 이상 실행한다.(ex. 로그인 패스워드 입력)
} while(false)

for(let i = 0; i < 2; i++)  {  //선언문 => 조건문 => 블럭 => 증감문 => 조건문 => 블럭 => 증감문 => 조건문 순으로 진행된다.
    console.log(`for: ${i}`)
}

for(let i = 0; i < 5; i++) {
    if(i >= 2) break
    console.log(i)
}