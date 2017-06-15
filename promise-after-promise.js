// MY SOLUTION

var p = first(); 

p.then(function(secret) {
    return second(secret); // return forces promise chain to wait
}).then(function(success) {
    console.log(success);
});

// OFFICIAL SOLUTION

var firstPromise = first();
    
    var secondPromise = firstPromise.then(function (val) {
      return second(val);
    });
    
    secondPromise.then(console.log);
    
    // As an alternative to the code above, ou could also do this:
    // first().then(second).then(console.log);

// CLASS SOLUTION

var p = first();

first().then(second).then(console.log)