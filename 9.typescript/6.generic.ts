function wrap<T>(value: T): T { //돌맹이를 갖다가 knight로 하자는 것과 똑같다. 아무거나 갖다 놓고 type을 선언하는 것이다.
    return value
}

const output = wrap('hello')
console.log(output, typeof output)

//
interface Woman {
    womanName: string
}

const woman: Woman = {womanName: 'here'}
const woman2: Woman = wrap(woman) //woman이라는 data를 parameter로 쓴다.
console.log(woman2, typeof woman2)

//
interface Item<T> {
    itemId: number
    data: T
}

interface Animal {
    animalName: string
}

interface Place {
    locationName: string
}

const animal: Item<Animal> = {
    itemId: 1,
    data: {
        animalName: 'cat'
    }
}

const place: Item<Place> = {
    itemId: 2,
    data: {
        locationName: 'seoul'
    }
}

//
type Product<T> = {
    productId: number
    data: T
}

class Queue<T> {
    list: T[] = []

    get length(): number {
        return this.list.length
    }

    enqueue(item, T): void {
        this.list.push(item)
    }

    dequeue() {
        return this.list.shift()
    }
}

const queue = new Queue<number>()
queue.enqueue(0)
queue.enqueue(1)

let e = queue.dequeue()
e = queue.dequeue()
console.log(e)