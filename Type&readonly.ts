type Animal = string | number | undefined;
let 동물 : Animal;

type 사람 = {
    name : string,
    age: number,
}

let teacher: 사람 = { name: 'john', age:20 }

const 출생지역 = 'seoul';

const 여친 ={
    name :'희원'
}
여친.name ='정희원';

type Girlfrined = {
    readonly name : string,
}
let 여친2 : Girlfrined = {
    name: '엠버'
}
//여친2.name='유라' //readonly라서 에러남


/** 속성 사항이 여러개일 경우 */
type Square ={
    color? : string,
    width: number,
}
let 네모2 :Square = {
    width: 100
}

/* type 키워드 여러개를 합칠 수 있다. */
type Name = string;
type Age = number;
type NewOne = Name | Age;

type PositionX ={ x: number };
type PositionY ={ y: number };
type XandY = PositionX & PositionY
let 좌표 : XandY = { x:1, y:2 };

//Type 키워드는 재정의가 불가합니다.
//type Name = string;
//type Name = number;