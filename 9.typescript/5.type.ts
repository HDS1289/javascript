type Man = {
    manName: string
}

const man: Man = {
    manName: 'john'
}

//
type Men = Man[]
const men: Men = [{manName: 'neo'}]

//
type Color = 'red' | 'green' | 'blue'
let color: Color = 'red'
//color = 'yellow'

type Employee = Man & { //type으로 만들어진 것은 &로 만들어질 수 있다.
    job: string
}

const employee: Employee = {
    job: 'programmer',
    manName: 'berg'
}