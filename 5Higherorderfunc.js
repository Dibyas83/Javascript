

function greet(sayhell){
    const name = "Alice";
    sayhell(name);
}
console.log(greet);

function sayhell(name){
    console.log("hello, " + name);
}
greet(sayhell);

// Example of HOF returning a function:

function multiplierA(factor){
    return function(no){
        return no * factor;
    };
}
const double = multiplierA(5); //double becomes function
console.log(double(5));

// forEach method is an inbuilt higher order function provided by JavaScript arrays
// to iterate over each element of the array. It accepts a callback function that is executed once for each array element.
let arr2 = new Array(5); 

let arr1 = [2,3,5,7,22]
let doubled = [];
arr1.forEach(num => doubled.push(num*2));   //push is callback
console.log(doubled);

const array = [1, 2, 3, 4, 5];
const arraytwo = [1, 2, 3, 4, 5];

function doubled1(number) {
  console.log(number * 2);
}

array.forEach(doubled1);


tripled = [];
arr1.forEach(n => tripled.push(n*3));
console.log(tripled);

console.log("--------------------------------------");

function trip(no){
    return no*3;
}
arraytwo.forEach(trip)
const tripledarr = arraytwo.map(trip);
console.log(tripledarr);

// map Method The map method is a higher order function that creates
//a new array by applying a callback function to each element of the original array.

let squares = arr1.map(x => x * x);
console.log(squares);

// using index as callback function inside map hof

const doubE = array.map(no => no * 2);
const multibyindex = array.map((no , index) => no * index);
console.log(doubE);
console.log(multibyindex);

// filter is a higher order function that creates a new array with all elements that
// pass the test implemented by the provided callback function.
let high = arr1.filter(x => x > 5);
console.log(high);

let g = arraytwo.filter(no => no >6);
console.log(g);
// Give 40% hike to employees with even userId and filter those with salary >= 100
let employees = [
  {id: 1, salary: 80},
  {id: 2, salary: 70},
  {id: 3, salary: 100}
];

let updated = employees
  .map(emp => emp.id % 2 === 0 ? {...emp, salary: emp.salary * 1.4} : emp)
  .filter(emp => emp.salary >= 100);

const updemp = employees.map(emp => {
    if(emp.id % 2 == 0){
        return{ id:emp.id,salary:emp.salary * 1.4};
    } else{return emp;}
}).filter(emp => emp.salary >= 100);

//------------------

let upd = employees.map(emp => emp.id % 2 === 0 ? {...emp, salary: emp.salary * 1.5} : emp)
.filter(emp => emp.salary > 100)
console.log(updated);
console.log(upd);

// reduce Method -reduce is a powerful higher order function used to transform an array
//  into a single value or another data structure through accumulation.
//It accepts a callback with two parameters: accumulator and current element.
//Also accepts an initial value for the accumulator.
//The callback returns the updated accumulator for the next iteration.

let sum = arr1.reduce((acc,curr) => acc + curr, 0);
console.log(sum);

let employees1 = [
  {id: 1, salary: 100},
  {id: 2, salary: 150}
];

let salmap = employees1.reduce((accumu,emp) => {accumu[emp.id] = emp.salary;
  return accumu;
}, {})

console.log(salmap);
let totsal = employees1.reduce((acc,emp) => acc + emp.salary,0);
console.log(totsal);

const salary =employees1.reduce((acc,emp) => {acc.push(emp.salary);
    return acc;

},[]);
console.log(salary);

const salaryobj =employees1.reduce((acc,emp) => {acc[emp.id]=emp.salary;
    return acc;
},{});
console.log("---------------");

let fruits = ["a","b","c","d","b"];
let freq = {};

for (let f of fruits){

  if (freq[f]) freq[f]++;  // not equal to 0 or undefined
  else freq[f] = 1;
}
console.log("ans",freq);
let fruits1 = ["a","b","c","d","b"];
fruits1.forEach(e => freq[e] = (freq[e] || 0) );

console.log(freq);

// Frequency Mapping Using reduce

let freqmap = fruits.reduce((acc,f) => {
  acc[f] = (acc[f] || 0) + 1;
  return acc;
},{})

console.log(freq);



let fruits2 = ["a","b","c","d","b"];
let doub =[];

for (let f of fruits){ 
if (freq[f] >= 1) doub.push(f);
else continue
}
console.log(doub);












