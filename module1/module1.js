const f = function() {
  console.log("This is function f inside module1.js");
};

 function x() {
  console.log("This is function x inside module1.js");
};

module.exports = {f,x};

