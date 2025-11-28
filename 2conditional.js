
let a = 10 + '20'
let b = 10 + "20"
console.log(a)
console.log(b)
console.log("5" * 2 + "1"); //+ a string makes it  concanate
console.log("5" * "2" +1);
console.log("5" + "2");
console.log("5" - "2");
console.log("10" - "7" + 3);
console.log( null == undefined, null === undefined );
console.log( [] + 1, [1] + 1 );
let x; 
console.log(typeof x, typeof y);

console.log(typeof([1] + 1));
console.log([1] + 1);

const user = { name: "Bicky", age: "29", active: "true", scores: ["10", "20", 30], meta: null };
const A = "10", B = 10, C = "42", D = 0, E = undefined, F = null, G = NaN;
const obj = { "key-1": 1, nested: { x: "2", y: 3 }, "weird prop": "ok" };

let rice = "burnt";

if (rice === "raw") {
  console.log("⏳ Keep cooking...");
} else if (rice === "burnt") {
  console.log("🔥 Order Zomato!");
} else {
  console.log("✅ Serve the biryani!");
}

let day = "sat";
switch (day) {
    case "fri":
    console.log("party")
    break;
    case "sat":
    console.log("party today")
    break;
    case "sun":
    console.log("party tomorow")
    break;
    default:
        console.log("no party tomorow")

}

let day2 = "sat";
switch (day) {
    case "fri":
    console.log("party")
    break;
    case "sat":
    case "sun":
    console.log("party continue")
    break;
    default:
        console.log("no party tomorow")

}

for(i=0;i<5;i=i+1){
    console.log(i)
}
for(i=5;i>0;i=i-1){
    console.log(i)
}
for(i=5;i>0;i=i-2){
    console.log(i)
}
let n = 7
while(n <= 11){
    console.log(n)
    n++
}

 let eat = 0
 for(let plate = 1;plate <=10;plate++){
if(plate==4){
    continue
}if (eat >= 5){
    break
}
console.log("eating plate ",plate)
eat++

 }

 function add(a,b=9){
let sum = a+b
return sum
 }

console.log(add(4,7))

var addd = function(a,b1=8){
    let sum=a+b1
    return sum
} 
console.log(addd(7))

const functionName = (parameters) => {
  return value;
};

var ahdd = (a,b2=8) =>{
    let sum=a+b2
    return sum

} 
console.log(ahdd(4,5))

let stomach = 0;
while (stomach < 3) {
  console.log("Eating biryani 🍛");
  stomach++;
}

let plates = 0;
do {
  console.log("At least one plate eaten 😋");
  plates++;
} while (plates < 1);

let goal = 0;
do{
    console.log("win")
    goal++
}while(goal<=0);

const isEven = (num) => (num % 2 === 0 ? "Even ✅" : "Odd ❌");
console.log(isEven(7));

const  isEven1 = (num) => ( num % 2 === 0 ? "even" : "odd");
console.log(isEven(6));


const multipleof3 = (limit) => {
    for(let i= 1; i <= limit; i++) {
        if (i % 3 === 0 ) console.log(i);
    }
};

console.log(multipleof3(55));

let age1 = 25;
const name11 = "'Bicy'";
let city11 = "'Kolkaa'";

console.log(`Hello,my ${name11}, i am ${age1} yr ${city11} , from ${city11}.`);

let age = 25;
const name = "Bicky";
let city = "Kolkata";

console.log(`Hello, my name is ${name}, I am ${age} years old, from ${city}.`);


function multipleOf32(a){
  for(let i=3;i<=a;i=i+3){
    console.log("new",i)
  }
};
multipleOf32(20)

console.log(adda(2,3)); // 5
function adda(a, b) {
  return a + b;
}

var suba = function(a, b) {
  return console.log(a - b);
};

suba(2,3);

//console.log(sub(2,3)); // Error: sub is not a function but variable function
//var sub = function(a, b) {
  //return a - b;
//};
let str1 = "hello";
console.log(str1[0]); // "h"
console.log(str1.charAt(1)); // "e"

str1[2] ="t"
console.log(str1);

let fruits = ["apple", "banana", "orange"];

for (let i = fruits.length-1; i >-1; i--) {
  console.log(fruits[i]);
}
const myObject = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const valuelistList = Object.values(myObject);

console.log(valuelistList);
















