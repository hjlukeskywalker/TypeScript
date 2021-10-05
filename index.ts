let 이름: string = 'kim';

let 이름2: string ='ajax';
let 나이: Number =20;
let 결혼했니:boolean = false;


let 회원들:string[] = ['kim','park'];

let 내정보:{ age: number} = {age: 27};



/**
좋아하는 가수와 나이를 적으세요 
* 
 */
let 가수:{ name: string, old: number} ={ name:'소녀시대', old:27};

/*
 Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}
*/

let project:{
    member: string[],
    days: number,
    started: boolean
}={
    member:['kim','park'],
    days:30,
    started:true,
}
 

