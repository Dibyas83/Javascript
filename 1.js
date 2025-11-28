
var y=11
let g=9
let o = "11"
let u="ui"
let obj={u:'7',o:'8',l:"ui"}
console.log(obj);
console.log(typeof(obj+y));
console.log(obj+y);
console.log(u+y);
console.log(obj*y);
console.log(typeof(u*y));
console.log(g>=y);
console.log(o===y); // checks value and datatype (strict eequality)
console.log(o==y);  // equal or not value (loose equality)
console.log(true && true);
console.log(true && false);
console.log(true && true || false); // left to right
console.log(false || true && false);
console.log(true || true && false);  // This is due to operator precedence rules in JavaScript. The logical AND operator (&&) has a higher precedence than the logical OR operator (||). Therefore, the true && false part of the expression is evaluated first. 

console.log(obj.o);

let arr1 = [1, "two", 3.14, false, null];
console.log(arr1[1]); // "two"
arr1.push(42); // Add element dynamically
console.log(arr1.length); // 6

console.log(obj[1]);
console.log(obj['l']);

console.log(Array.isArray(arr1));
console.log(Array.isArray(obj));






