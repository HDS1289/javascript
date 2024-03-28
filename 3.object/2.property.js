let user = {}  //property가 없는 객체이다.

user.height = 200  //할당 연산자를 통하여 추가할 수 있다.
user['weight'] = 80

console.log(user.height, user.weight)  //해당 property가 없기 때문에 undefined로 처리한다.

delete user.weight
console.log(user.weight)  //undefined로 출력했을 뿐이다.

console.log('height' in user) //in 다음에 property name ==> true 값을 return ==> property값이 있는지를 판단할 수 있다.
console.log('weight' in user)

for(let key in user) {
    console.log(user[key])  //key의 value를 iterating(추출)한다.
}

user.userName = 'parker'

console.log(Object.keys(user))  
console.log(Object.values(user))
console.log(Object.entries(user))


user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}  //method ==> 객체의 행동을 나타내는 함수이다.(user가 greet한다의 관점으로 객체를 생성한 것이다.)

user.greet() //user가 인사하다.(주어, 서술어로 이루어진 코드로 객체지향적인 성격을 가진다.)

/* optional chaining */
user = {}
let address = {}
address.street = 'sejong' //address라는 객체에 street라는 key를 추가하고, 'sejong'이라는 string type data를 property value로 한다.
user.address = address // user라는 객체에 address라는 key를 추가하고, address에 속한 property를 복사하여 key value로 할당한다.
console.log(user.address.street)
console.log(user.city)
//console.log(user.city.cityName)

// 주어가 null 이나 undefined 이면 ==> undefined 반환하고 chain을 끝낸다.
let street
street = user?.city?.street
console.log(street)
street = user?.city?.street ?? 'where' //'where'을 반환하고 chain을 끝낸다. 기본값을 지정하는 것이다. nullish coalescing operator
console.log(street)
//user?.address = 'sejong' 할당 연산자를 쓸 수 없다. reading만 가능하다.

user = null
//user.greet()
user?.greet()  //log라는 api를 call하지 않았기 때문이다.
console.log(user?.greet()) //optional chaining이 undefined를 return한 것이다.