let 이름: string | number ='kim';
let 나이: (string| number) = 100;

var 어레이: (number| string)[] =[1, '2', 3];
var 오브젝트: {data: (number | string)} ={ data :123 };

let 이룸: any = 'kim';
이룸 = 123;
이룸 = undefined;
이룸 = [];

/**
 * unknown 타입엔 모든 자료 다 집어넣을 수 있음
 * 자료집어넣어도 타입은 그대로 unknown 입니다.
 */
let 이름2 : unknown ='kim';
이름2 = 123;
이름2 = undefined;
이름2 = [];







