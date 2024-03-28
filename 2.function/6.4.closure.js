function makeCounter() {
    let count = 0 //장치 속에 있는 function이다.

    return function() {
        return ++count
    }  //자신이 존재하던 범위를 벗어나서 존재할 수 있는 함수이다. 이웃에 있는 counter를 자유롭게 사용할 수 있다.
}

let counter1 = makeCounter()
let counter2 = makeCounter()

for(let i =0; i < 2; i++)
   console.log(counter1())

for(let i =0; i < 2; i++) 
    console.log(counter2())