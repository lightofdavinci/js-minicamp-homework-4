/*
    In JavaScript, functions are first-class objects;
    that is, functions are of the type Object and
    they can be used in a first-class manner like any other object (String, Array, Number, etc.)
    since they are in fact objects themselves.
    Because functions are first-class objects,
    we can pass a function as an argument in another function and later execute that passed-in function or
    even return it to be executed later. This is the essence of using callback functions in JavaScript.

    A closure is a function having access to the parent scope, even after the parent function has closed.
    e.g function outer(){
      var temp = "demo";
      return function inner(){
        console.log(temp);
      }
    }
    var x = outer();
    x() => "demo";

    Arguments object is a local variable that is accessible within any function.
    It consists of the arguments passed to the function (indexing starts at 0).
    It looks like an array, but does not have any of its properties except length.
    However, it can be converted to a regular array:
    var args = Array.prototype.slice.call(arguments);
    var args = Array.from(arguments);
    var args = [...arguments];

    Recursion is the process of repeating items in a self-similar way.
    It is a function that calls itself. Another way of looping.
    function factorial( n ) {
      if ( n === 1 ) { // base case to stop (break) looping
        return 1;
      }
      return n * factorial( n - 1 );
    }

    A constructor is a function used for initializing new objects, and you use the new keyword to call the constructor.
    It is considered good practice to name constructor function with an upper-case first letter.
    function Car () {}
    var ford = new Car ();
    // This is the use of the Car constructor to create the ford object.
    All objects that inherit from another object also inherit a constructor property.
    And this constructor property is simply a property (like any variable) that holds or points to the constructor of the object.

    The prototype is also an object.
    All JavaScript objects inherit their properties and methods from their prototype.
    The Object.prototype is on the top of the prototype chain.
    You cannot add a new property to a prototype the same way as you add a new property to an existing object,
    because the prototype is not an existing object. To add a new property to a prototype,
    you must add it to the constructor function.
    function Person(firstName, lastName, ) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    Your constructor function can also define methods:
    Person.prototype.fullName = function() {
        return this.firstName + " " + this.lastName;
    }; // this way of defining methods helps to prevent creating a function for each new object,
    so all objects created will be referenced to one method.

*/

// Do not change any of the function names

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if (!arguments.length) { return 0; }
  else if (arguments.length === 1) { return arguments[0]; }
  else {
    var result = arguments[0];
    for(var i = 1; i < arguments.length; i++){
      result *= arguments[i];
    }
    return result;
  }
}

function invokeCallback(cb) {
  // invoke cb
  cb();
}

function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  cb(numbers.reduce(function(a,b){
    return a + b;
    }, 0)
  );
}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  arr.forEach(function(val){
    cb(val);
  });
}

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  return arr.map(function(item){
    return cb(item);
  });
}

function getUserConstructor() {
  // create a constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
  function User(options){
    this.username = options.username;
    this.name = options.name;
    this.email = options.email;
    this.password = options.password;
  }
  User.prototype.sayHi = function() {
    return 'Hello, my name is ' + this.name;
  };
  return User;
}

function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = function () {
    return 'Hello World!';
  };
}

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  String.prototype.reverse = function(){
    var result = '';
    for (var i = this.length - 1; i >= 0; i--) {
      result += this[i];
    }
    return result;
  };
}

function nFactorial(n) {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if ( n === 1 ) { return 1; }
  return n * nFactorial( n - 1 );
}

function cacheFunction(cb) {
  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
  var cached = null;
  return function(val){
    if(cached !== null){ return cached; }
    cached = cb(val);
    return cb(val);
  };
}


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments: multiplyArguments,
  invokeCallback: invokeCallback,
  sumArray: sumArray,
  forEach: forEach,
  map: map,
  getUserConstructor: getUserConstructor,
  addPrototypeMethod: addPrototypeMethod,
  addReverseString: addReverseString,
  nFactorial: nFactorial,
  cacheFunction: cacheFunction
};
