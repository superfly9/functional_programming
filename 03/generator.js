import { log } from "../util.js";

// 제너레이터 :   well-formed 이터레이터를 반환하는 함수이자 그 자체로 이터러블한 존재

function* gen1() {
  yield 1;
  if (false) yield 2;
  yield 3;
  yield "seoul";
}
let iter = gen1(); // Object [Generator] {}
log(iter.next()); // {value : 1, done : false}

for (let val of iter) log(val); // 3, 'seoul'

iter === iter[Symbol.iterator](); // true ( well - formed iterator)
