

console.log('Start');
for(let i = 0; i < 1e9; i++) {
  // heavy computation
}
console.log('End');


console.log('Start');
setTimeout(() => {
  console.log('Timeout finished');
}, 1000);
console.log('End');



console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);

let count = 0;
const intervalId = setInterval(() => {
  console.log(count);
  count++;
  if(count > 5) {
    clearInterval(intervalId);
    console.log('Interval cleared');
  }
}, 1000);







