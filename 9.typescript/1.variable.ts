let msg: string = 'hello'
//msg = 1

let val: number = 1
let nullableStr: string | null = null //union type
nullableStr = 'Hi'
//nullableStr = undefined

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'

let isCompleted: boolean = true //bullean type variable
isCompleted = false
//isCompleted = 0

let anyValue: any = null //anytype
anyValue = undefined
anyValue = 1
anyValue = 'hello'

let a = 1
//a = 'hello'