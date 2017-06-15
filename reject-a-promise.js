// MY SOLUTION

var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var e = new Error('REJECTED!');
        reject(e);
    }, 300);
});
p.then(null, onReject); // no fulfilled, so null + have function so don't need to leave anonymous

function onReject(error) {
    console.log(error.message); // logging message property of whatever that error (reject) might be
};

// OFFICIAL SOLUTION

// Create a promise
    
    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, reject the promise with an `Error` object
      // with parameter `"REJECTED!"`.
    
      setTimeout(function () {
        reject(new Error('REJECTED!'));
      }, 300);
    });
    
    // Create a function to print `error.message` using `console.log`.
    
    function onReject(error) {
      console.log(error.message);
    }
    
    // Pass this function as a rejection handler to the `then` method of the
    // promise (the second parameter).
    
    promise.then(null, onReject);