import { log } from "../util.js";
const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰케이스", price: 15000 },
  { name: "후드티", price: 30000 },
  { name: "바지", price: 25000 },
];

// let names = [];
// for (const p of products) {
//   names.push(p.name);
// }
// log(names);

// let prices = [];
// for (const p of products) {
//   prices.push(p.price);
// }
// log(prices);

// 위의 코드를 대신하는 Array.map을 만들어보면
const map = (f, iterator) => {
  let result = [];

  for (let a of iterator) {
    // iterator대해 for of 사용
    // callback의 실행 결과를 push
    // 추상화 (f(a))
    result.push(f(a));
  }
  return result;
};
log(map((v) => v.name, products));
log(map((p) => p.price, products));
