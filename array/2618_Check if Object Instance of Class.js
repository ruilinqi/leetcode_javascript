/**
 * Write a function that checks if a given object is an instance of a given class or superclass. 
 * For this problem, an object is considered an instance of a given class if that object has access 
 * to that class's methods.

There are no constraints on the data types that can be passed to the function.

 

Example 1:

Input: func = () => checkIfInstance(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.

Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstance(new Dog(), 
Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstance(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.

Example 3:

Input: func = () => checkIfInstance(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.

Example 4:

Input: func = () => checkIfInstance(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is 
still considered an instance of Number because it accesses the Number methods. For example "toFixed()".
 * 
 */

/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
// Solution 1:
var checkIfInstanceOf = function(obj, classFunction) {
  //if object became null return false
  if (obj == null) {
      return false;
  }
  //if found return true             
  if (obj.constructor === classFunction) {
      return true;
  }
  obj = Object.getPrototypeOf(obj);
  return checkIfInstanceOf(obj, classFunction);
};

// Solution 2:
// It does not work for Number such as input is "() => checkIfInstanceOf(5, Number)"
// because the current implementation only checks if the object is an instance of the class or any of 
// its superclasses in the prototype chain, but it does not check if the object has access to the class's 
// methods.
var checkIfInstanceOf = function(obj, classFunction) {
  // Check if the classFunction is a function
  if (typeof classFunction !== 'function') {
    throw new Error('The second argument must be a class function.');
  }

  // Check if obj is an object
  if (typeof obj !== 'object') {
    return false;
  }

  // Check if obj is an instance of classFunction or any of its superclasses
  let currentClass = Object.getPrototypeOf(obj);
  while (currentClass !== null) {
    if (currentClass === classFunction.prototype) {
      return true;
    }
    currentClass = Object.getPrototypeOf(currentClass);
  }
  return false;
};
