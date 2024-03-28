let a = 1  // global scope
// let a 

{
    console.log(a)   //local scope
}

{
    let a = 2
    //let a  local 내에서 중복은 허용이 안 된다.
    console.log(a)
}

console.log(a)