// MY SOLUTION

var p = new Promise(function(resolve, reject) {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
})
p.then(console.log, function(err) {
    csonole.log(err.message);
});

// OFFICIAL SOLUTION

var promise = new Promise(function (fulfill, reject) {
      fulfill('I FIRED');
      reject(new Error('I DID NOT FIRE'));
    });
    
    function onReject(error) {
      console.log(error.message);
    }
    
    promise.then(console.log, onReject);