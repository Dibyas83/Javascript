
//-------------clearInterval example-------------------
let count = 0;
let timerId;

function startCounter() {
  timerId = setInterval(() => {
    console.log(`Count: ${count}`);
    count++;
    if (count > 5) {
      clearInterval(timerId); // Stop the interval after 5 counts
      console.log("Counter stopped.");
    }
  }, 1000); // Execute every 1000 milliseconds (1 second)
}

startCounter();

// -------------------callback example-------------------

function performOperation(value, callback) {
  console.log("Performing operation with:", value);
  // Simulate some asynchronous task
  setTimeout(() => {
    const result = value * 2;
    callback(result); // Call the callback with the result
  }, 1000);
}

function displayResult(data) {
  console.log("The result is:", data);
}

performOperation(5, displayResult); // Pass displayResult as the callback

// -------------------Promise example-------------------

let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    let success = true; // Or false for rejection
    if (success) {
      resolve("Operation successful!"); // Call resolve on success
    } else {
      reject("Operation failed!"); // Call reject on failure
    }
  }, 2000);
});
myPromise
  .then((message) => {
    console.log("Success:", message); // Executed if the promise is fulfilled
  })
  .catch((error) => {
    console.error("Error:", error); // Executed if the promise is rejected
  });

fetch("/api/data")
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched data:", data);
    return processData(data); // Returns another promise
  })
  .then((processedResult) => {
    console.log("Processed result:", processedResult);
  })
  .catch((error) => {
    console.error("Error in chain:", error);
  });
//---------------

let promise = new Promise((resolve,reject) =>{
  let sucess = Math.random() >= 0.5;
  if (sucess){
    resolve("task completed");
  }else{
    reject("incomplete");
  }
})
promise.then((result) => {console.log(result)}

).catch(err => {console.log(err)}
).finally(() => {console.log("always run")})

Promise.resolve(5).then(value => {return value*2})
.then(value => {value + 4})
.then(value => {console.log(value)})










//-------------async

 async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();

  async function fetchData() {
  try {
    // Simulate fetching data from an API
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();






