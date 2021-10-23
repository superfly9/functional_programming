// Symbol -> 객체의 키로 사용가능
// Symbol.iterator 메서드를 가지고 있는 객체가 이터레이터
// array , map ,set은 js의 이터러블한 내장 객체

const arr = [1, 2, 3];
// arr[Symbol.iterator] : [Function: values]
const iter1 = arr[Symbol.iterator](); // Object [Array Iterator] {}
console.log(iter1.next()); // { value : 1 , done : false}

console.log("iter1:", iter1, arr[Symbol.iterator]);

const set = new Set([1, 2, 3]);
const iter2 = set[Symbol.iterator](); // [Set Iterator] {1,2,3}

console.log(iter2);

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

const iter3 = map[Symbol.iterator](); // [Map Entries] {['a',1],['b',2], ['c',3]}
iter3.next(); // {value :['a',1], done : false}
iter3.next(); // {value :['b',2], done : false}
iter3.next(); // {value :['c',3], done : false}
iter3.next(); // {value : undefined , done : true}

// map
map.keys(), map.values(), map.entries(); // return iterator

// 이터러블 , 이터레이터 프로토콜
// 이터러블 : Symbol.iterator 메서드(iterator를 리턴)를 가진 객체 ,
// 이터레이터 : {value , done}형식의 객체 + next 메서드를 통해 호출 가능
// 이터러블 / 이터레이터 프로토콜 : 이터러블을 for of, ...rest , desturctuing , ...spread operator와 함께 동작하도록 한 약속

// for val of arr => val는 iterator.value의 값을 의미
// {value : undefined, done : true} => done : true가 되면 반복 종료
