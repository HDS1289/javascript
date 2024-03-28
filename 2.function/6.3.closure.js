function makeFn() {
    let userName = 'parker'

   function displayUserName() {
        console.log(userName)
    } //closure로 인하여 userName이 출력된다.

    return displayUserName
}

let myFn = makeFn()
myFn()