const age = 16

//sayAge()
//tellAge()

console.log(sayAge)  //undefined상태로 초기화되어 있다.
{
    let age = 10
    
    function sayAge() { //function declaration ==> global하게 쓰인다.
        console.log(age)
    } //closure. outer 주소값을 복사한다.

    let tellAge = function() { //function expression ==> local범위로 제한된다.
        console.log(age)
    } //closure
    sayAge()
    tellAge()
}

sayAge()
//tellAge()