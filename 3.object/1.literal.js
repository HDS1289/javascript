/* object literal */ //객체를 글과 같이 표현하는 것이다. //한 번 생성하기만 하는 일회용 객체이다.

let user = {
    userName: 'frances',
    age: 70
}  //한 사람에 대한 정보들의 집합체이다.

user = {
    userName: {
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face',
    age: 13,
    interests: ['music', 'movie'],
    sing: () => console.log('lala')  //언제든 바뀔 수 있는 data이다.
}

/* reading property */ //writing property (추가, 수정, 삭제)
console.log(user.userName) //할당 연산자가 없으므로 reading임을 알 수 있다. (period는 소유격으로 쓰인다.)
console.log(user.userName.first) //period연산자는 object에만 사용 가능하다. (first는 string type(literal)이므로 object이 아니다.)
user.sing()

//user.'nick name'
console.log(user['nick name'])
console.log(user['userName']['first']) //가독성이 떨어질 수 있다. 'string type'의 속성을 reading할 수 있다.

/* writing property */ //updating or deleting
user.userName.first = 'john'
user['age'] = 50
console.group(user.userName.first, user.age)

let key = 'nick name'  //variable로 선언된 것이다.
console.log(user[key])

key = 'age'
console.log(user[key])

let man = {
    manName: 'samuel',
    1: 'one',
    2: 'two'
}
console.log(man['1']) 


