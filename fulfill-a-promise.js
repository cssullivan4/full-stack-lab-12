// MY SOLUTION

var p = new Promise(function(resolve, reject) { // placeholder for function to call, 
    setTimeout(function () { //asynchronous
        resolve('FULFILLED!'); // drops into 'success' handler function below
    }, 300);
});

p.then(function(success) { // doesn't matter the name of parameter; calls state of fulfilled
    console.log(success)
});

// OFFICIAL SOLUTION

// Create a promise
    
    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, fulfill the promise with value
      // 'FULFILLED!'.
    
      setTimeout(function () {
        fulfill('FULFILLED!');
      }, 300);
    });
    
    // Add a handler to the promise’s fulfillment. `console.log` will be called
    // with the value passed to `fulfill`, which is `'FULFILLED!'`.
    // Note that this statement will ALWAYS be executed before `fulfill` is
    // called (we'll talk about this in depth in the lessons to come).
    
    promise.then(console.log);