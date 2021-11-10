/* Literal Type 만드는 법 */

let john :'대머리';
let kin : '솔로';

let 방향 : 'left' |'right';
방향 = 'left';

function 함수(a:'hello'): 1 | 0 | -1{
    return 1
}

/*Q. 이런 함수는 어떻게 만들까요?

- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고

- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.

- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능

- ['가위', '바보'] 이런거 return하면 에러나야함  */

function rock(a: '가위'|'바위'|'보'):('가위'|'바위'|'보')[]{
    return ['가위','보']
}


//as const문법

var 자료 ={
    name : 'kim'
} as const;

function 내함수2 (a:'kim'){
}
내함수2(자료.name)