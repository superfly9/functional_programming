import { log } from "../util.js";

// 고차함수 : 함수를 값으로 다루는 함수
// 유형
// 1. 함수를 인자로 받아서 실행하는 함수
const apply1 = (f) => f(1); // apply : 함수를 인자값으로 받아 다룸, 따라서 apply1은 함수를 값으로 다루는 고차함수

const add2 = (a) => a + 2;
const multi2 = (a) => a * 2;

log(apply1(add2)); // 3
log(apply1(multi2)); // 2

const times = (f, n) => {
  //함수를 인자로 받아서 실행하는 함수
  let i = -1;
  while (++i < n) f(i);
};
times(log, 5); // 0,1,2,3,4
times((a) => log(a + 20), 3); // 20, 21 ,22

//2. 함수를 만들어 리턴하는 함수(클로저를 만들어 리턴하는 함수)

const addMaker = (a) => (b) => a + b;
//(b) => a + b 함수는 생성될때의 a라는 값을 기억하는 함수이기에 클로저
// addMaker는 클로저를 만들어 리턴하는 함수
const add10 = addMaker(10); // (b)=> 10 + b;
const num1 = add10(3); // 13
