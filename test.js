
 
function test() {
   
    console.log(x);
    
}
var x = 2;
test();

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}


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
