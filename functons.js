
const cart = [
  { name: 'Maggie', price: 12 },
  { name: 'Maggie', price: 12 },
  { name: 'Maggie', price: 13 },
  { name: 'Oil', price: 70 },
  { name: 'Flour', price: 60 },
  { name: 'Potato', price: 40 }
];

function ans1(cart){
    let quant = {};
    let pric = {};
    for(let item of cart){
        quant[item.name] = (quant[item.name] || 0) + 1;
        pric[item.name] = item.price
    }
    const merged = [];   // json list of objects
    for (let key in quant) {merged.push({
        name: key,
        quant:quant[key],
        pric:pric[key]
    });
        
    }return merged;

}

console.log(ans1(cart));

const users = [
  { userId: 1, username: 'User1', createdAt: 100 },
  { userId: 1, username: 'User1', createdAt: 110 },
  { userId: 2, username: 'User2', createdAt: 80 },
  { userId: 3, username: 'User3', createdAt: 99 },
  { userId: 3, username: 'User3', createdAt: 89 }
];

function removeDuplicateUsers(users) {
  const latestCreatedAt = {};
  const userData = {};

  for (let user of users) {
    if (!latestCreatedAt[user.userId] || user.createdAt > latestCreatedAt[user.userId]) {
      latestCreatedAt[user.userId] = user.createdAt;
      userData[user.userId] = {
        userId: user.userId,
        username: user.username,
        createdAt: user.createdAt
      };
    }
  }
  console.log(latestCreatedAt)
console.log(userData)

  return Object.values(userData);
}

console.log(removeDuplicateUsers(users));


function groupUsers(data, key) {
  let answer = {};
  for (let user of data) {
    if (!answer[user[key]]) {
      answer[user[key]] = [];
    }
    answer[user[key]].push(user.username);
  }
  return answer;
}

const users3 = [
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

console.log(groupUsers(users3, 'city'));





