function Gun() {
    this.fire = () => console.log('탕탕')
}

function Shooter(shooterName, gun) {
    this.shooterName = shooterName
    this.fire = () => gun.fire()   //dependency
}

let gun = new Gun()
let shooter1 = new Shooter('최한석', gun)
let shooter2 = new Shooter('한아름', gun)

shooter1.fire()
shooter2.fire()

function Ball() {} 


function Player(playerName) {
    this.playerName = playerName
    this.pass = ball => ball //parameter(알고리즘을 시작할 때 준비되는 data), return(알고리즘을 끝냈을 때 반환되는 data)
    this.kick = ball => ball
}

//let ball = new Ball()
//let player1 = new Player('최한석')
//let player2 = new Player('한아름')
//let palyer3 = new Player('양승일')

//player1.pass()
//player2.pass()
//palyer3.kick()

//ball = player3.kick(player2.pass(player1.kick(pass)))

//ball = player1.pass(ball)
//ball = player2.pass(ball)
//ball = player3.kick(ball)

const ball = new Ball()
const player1 = new Player('최한석')
const player2 = new Player('한아름')
const player3 = new Player('양승일')

player3.kick(player2.pass(player1.pass(ball)))

//
function Food(foodName) { //태어나자마자 이름을 갖고 태어난다.
    this.foodName = foodName
}

function Mom() {  //태어나는 순간 이름이 없다.
    this.cook = foodName => new Food(foodName) //음식 이름은 객체가 아니다.(string type data)
}

function Child() {
    this.eat = food => {}
}

const mom = new Mom()
const child = new Child()

child.eat(mom.cook('짜장면'))