// MY SOLUTION

function attachTitle(name) {
    return 'DR. ' + name;
}

var p = Promise.resolve('MANHATTAN');

// p.then(function(success) {
//     return attachTitle(success); // don't forget return when chain
// }).then(function(nameWithTitle) {
//     console.log(nameWithTitle);
// });

p.then(attachTitle).then(console.log); // functionally same as above

// OFFICIAL SOLUTION

  function attachTitle(name) {
      return 'DR. ' + name;
    }
    
    Promise.resolve('MANHATTAN')
      .then(attachTitle)
      .then(console.log);