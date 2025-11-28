
for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    console.log("Skipping plate 3 🛑");
    continue;
  }
  if (i === 5) {
    console.log("Too much! Stop eating 🚫");
    break;
  }
  console.log(`Eating plate ${i}`);
}

let plates = 0;
do {
    console.log("do eat");
    plates++;}
while(plates < 1);

while(plates < 4) {
    console.log("while eating");
    plates++
}

const suma = (a,b) => a+b; 
console.log(suma(4,6))

const iseven = (num) => (num % 2 === 0 ? "even": "odd");
console.log(iseven(6));

function su(a,b){
    return a + b;
}
console.log(su(6,8));


const multiof3 = (limit) => {
    for(let i = 1;i<=limit;i++){
        if(i%3 === 0) console.log(i);
    }
}
multiof3(22);

let age =55;
const name = "yu";
console.log('my name is ${name},i am ${age}.');

fact = 1
const factori = (limit) => {
    for(let i = 1;i<=limit;i++){
        (fact = fact * i) 
    }
    console.log(fact);

}
factori(4)

let arra = new Array(5);
let arry = [1, 2, 3, 4, 6];
arra.push(1,2,3,8,9)
console.log(arra);
arra.pop() //removes last
console.log(arra);
arra.pop()
arra.shift()
console.log(arra);
arra.unshift(0)
console.log(arra);
console.log([6,8].shift());//removes first ele
console.log([5,6,8].shift());

arry.splice(2,3) // removes start,coount
console.log(arry);

// stack push pop
// que push shift

let student = {
  name: "Bicky",
  rollNumber: 100,
  present: true
};
console.log(student.name);
let key = "name";
console.log(student[key]);

const myObject = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const keysList = Object.keys(myObject);
const valuelistList = Object.values(myObject);
console.log(keysList[1]);
console.log(valuelistList);
console.log(keysList);
let employe = [
  { id: 1, name: "Bicky", salary: 1000 },
  { id: 2, name: "Magesh", salary: 2000 }
];

console.log(employe[1].name);
employe[0].name = "rt";
console.log(employe[1]);
for(let emp of employe){
  console.log(emp.name, emp.salary);
}
for(let e of employe){
  console.log(e.id);
}
str = "hello";
console.log(str[1])
console.log(str[1].toUpperCase())


let students = ["Alice", "Bob", "Eve", "Oscar"];
let vowels = ["A","E","I","O","U"];
let vowelNames = [];
let consonantNames = [];

for (let name of students){
  if (vowels.includes(name[0])) {
    vowelNames.push(name);
  } else {
    consonantNames.push(name)
  }
}
console.log(vowelNames , consonantNames)


for(let ele of students){
  if(vowels.includes(ele[0])){
    vowelNames.push(ele);
  } else{
    consonantNames.push(ele);
  }
}

let eaten1 = 0;
for(let plates1 = 1; plates1 <= 10; plates1++){
  if (plates1 == 3){
    continue
  }if (eaten1 >= 5){
    break
  }
  console.log("i have eaten ",plates1," plates")
  eaten1++
};


const m3 =(n) => (n % 2 == 0? "even" : "odd");
console.log(m3(8));

const m4 = (a)=> {
  for(let i=0;i<=a;i++){
    if(i%5 == 0) console.log(i)
  }
};
m4(22)


const f = function(a,b){
  return a-b;
};
console.log(f(6,4))
  

let array11 = [1,2,3,4,5,6,7,8,9,10,"a","b"]

let remove1 = array11.splice(8);
console.log(remove1);

console.log(array11.shift());
array11.unshift(10);
console.log(array11);


















