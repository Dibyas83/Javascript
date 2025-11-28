


let employees11 = [
  { employeeId: 1, name: "Bicky", salary: 1000, city: "Kolkata" },
  { employeeId: 2, name: "Alice", salary: 1500, city: "Delhi" },
  { employeeId: 3, name: "Bob", salary: 1200, city: "Mumbai" }
];

function aa(employees11){
for (let a = 0; a < employees11.length; a++ ){
  console.log(employees11[a].employeeId ,":", employees11[a].salary)
}
};

aa(employees11);




function grouping(data,key){  // data is a json or array of objects
  let groupp = {};
  for (let obj of data){
    if(!groupp[obj[key]]){
       groupp[obj[key]] = [];  // created a list for values
    }
    groupp[obj[key]].push(obj.username)  // pushed into the list for values
  }
    
     return groupp;
  }


const users1 = [
  { username: 'Naresh', city: 'Vizag' },
  { username: 'Smith', city: 'Nakpur' },
  { username: 'Ashish', city: 'Uttarakhand' },
  { username: 'Mickey', city: 'Bangalore' },
  { username: 'User1', city: 'Bangalore' },
  { username: 'User2', city: 'Uttarakhand' },
  { username: 'User3', city: 'Vizag' },
  { username: 'User4', city: 'Nakpur' },
  { username: 'User5', city: 'Nakpur' },
  { username: 'Priyanshu', city: 'Maradabad' },
];

console.log(grouping(users1,"city"))



//frequency

const list = [1, 3, 1, 5, 3, 6, 7, 7, 3];
const frequency = {};
for (let ele of list){
  frequency[ele] = (frequency[ele] || 0) + 1;  //if ele in already in frequency object or not
}
console.log(frequency)

const frequency2 = {};
for(let ele of list){
  if(frequency2[ele] == undefined){
    frequency2[ele] = 1
  }else{
    frequency2[ele] += 1;
  }
}
console.log(frequency2);
// ecommerce calculation

function Tobepaid(datacust,{
  tax = 5, // $
  disc = 10, // %
  discamt = 500,
  pltform_fee = 10,  // fixed
  deliveryCharge = 20,
  deliveryChaargewaiver = 500 // min amt
} = {}){
  let total = 0;
  for(let item of datacust){
    total += item.price * item.quantity;
  }
  let discountedTotal = total;
  if (total >=  discamt){
    discountedTotal = total - (total*disc/100);
  }
  let taxtotal = discountedTotal + (discountedTotal*tax/100);
  let currtotal  = taxtotal + pltform_fee;
  if (discountedTotal < deliveryChaargewaiver){
    currtotal += deliveryCharge;
  } 
  return currtotal;
}

const cart1 = [
  { name: 'Maggie', price: 12, quantity: 3 },
  { name: 'Oil', price: 99, quantity: 1 },
  { name: 'Potato', price: 40, quantity: 2 },
  { name: 'Flour', price: 60, quantity: 1 },
  { name: 'Sugar', price: 50, quantity: 1 },
  { name: 'Salt', price: 5, quantity: 1 },
  { name: 'Tea', price: 200, quantity: 1 },
  { name: 'Milk', price: 70, quantity: 1 }
];

console.log(Tobepaid(cart1));

// merge duplicates


const cartA = [
  { name: 'Maggie', price: 12 },
  { name: 'Maggie', price: 12 },
  { name: 'Maggie', price: 12 },
  { name: 'Oil', price: 70 },
  { name: 'Flour', price: 60 },
  { name: 'Potato', price: 40 }
];

function mergeduplicates(cartA){
  let quant = {};
  let prices = {};
  for(let item of cartA){
    quant[item.name] = (quant[item.name] || 0) + 1; // firsttime always 0
    prices[item.name] = item.price;
}
const mergedarray = [];
for(let key in quant){
  mergedarray.push({
    name:key,
    price:prices[key],
    no_of : quant[key]
  });   // for each key list of items are pushed
}
return mergedarray;

}
console.log(mergeduplicates(cartA));

// Removing Duplicate Users based on Latest Timestamps


const users2 = [
  { userId: 1, username: 'User1', createdAt: 100 },
  { userId: 1, username: 'User1', createdAt: 110 },
  { userId: 2, username: 'User2', createdAt: 80 },
  { userId: 3, username: 'User3', createdAt: 99 },
  { userId: 3, username: 'User3', createdAt: 89 }
];


function removeDuplicates(users){

  const latest = {};
  const userdata = {};

  for (let user of users){

    if(!latest[user.userId] || user.createdAt > latest[user.userId]) {
      latest[user.userId] = user.createdAt;
      userdata[user.userId] = {
        userid: user.userId,
        username: user.username,
        createdAt: user.createdAt
      };
    }
  }
  return Object.values(userdata);

}

console.log(removeDuplicates(users2));


let usercreatedAt = {}
let userna ={}
for(let user of users2){
  console.log(usercreatedAt[user["userId"]]);
  console.log(user["createdAt"])
    if( usercreatedAt[user["userId"]] == undefined){
        usercreatedAt[user["userId"]] = user["createdAt"]
    }else{
         usercreatedAt[user["userId"]] = Math.max(
        usercreatedAt[user["userId"]],user["createdAt"])
    }
    console.log(usercreatedAt[user["userId"]])
    userna[user["userId"]] = user.username
}
 
 console.log(usercreatedAt);

 let arr3 = []
 for(let key in usercreatedAt){   //in used in obj,in gves keys of gives values
     let obj2 = {userId:key,username:userna[key],createdAt:
        usercreatedAt[key]}
        arr3.push(obj2)
 }
 console.log(arr3);

// --------------








