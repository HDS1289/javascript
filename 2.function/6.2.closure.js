const age = 16
//sayAge()
//tellAge()
function init() {  //local scope이 다르다. local scope가 function으로 정의되어 있다.
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}  //init이라는 함수를 call했을 때 LE가 생성된다.

init()
//sayAge()
//tellAge()