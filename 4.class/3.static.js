class Article {
    static publisher = 'ddanzi' //정의는 되어 있다.

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) { //object - object ==> primitive type로의 변환.
        return article1 - article2 //valueOf가 호출된 것이다.
    }

    toString() { //string type로의 변환    //instance method
        return this.title //문자열(string)이어야 하므로 '제목'(title)으로 지정되어야 한다.
    }

    valueOf() { //number type로의 변환
        return this.viewCnt
    }
}

console.log(Article.publisher)

//
Article.address = 'seoul' //new를 쓰지 않고 data를 할당 가능하고 호출할 수 있다.
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100) //생성자 부분으로 새로운 객체가 생성된 것이다.
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2)) // 90이 출력된다.

//
console.log(`${article1}`) //'java'가 출력된다.

console.log(article1 + '') //valueOf가 실행된 것이다. number type으로 더하기가 실행된 것이다. //100이 출력된다.

//
console.log(article1.publisher, article1.address, article1.compare)
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(Article)) //static한 요소들만 조회된다.

console.log(Article.prototype)
console.log(Object.keys(article1))