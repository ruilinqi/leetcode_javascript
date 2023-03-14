
// an example of a JavaScript promise
const myPromise = new Promise((resolve, reject) => {
  // Some asynchronous operation, like fetching data from an API
  const data = fetchDataFromAPI();

  if (data) {
    resolve(data); // Resolve the promise with the fetched data
  } else {
    reject("Error: Failed to fetch data"); // Reject the promise with an error message
  }
});

myPromise.then((data) => {
  // Do something with the fetched data
  console.log(data);
}).catch((error) => {
  // Handle the error if the promise was rejected
  console.error(error);
});

/**
 * In this example, we create a new promise using the Promise constructor. The promise takes a function as an argument, 
 * which has two parameters: resolve and reject. resolve is a function that, when called, resolves the promise with a 
 * value. reject is a function that, when called, rejects the promise with an error.

Inside the promise, we perform an asynchronous operation, like fetching data from an API. If the operation is successful, 
we call resolve and pass in the fetched data. If the operation fails, we call reject and pass in an error message.

After creating the promise, we can use the then method to handle the resolved value and the catch method to handle any 
errors. In this example, we simply log the fetched data to the console if the promise is resolved, and log the error to 
the console if the promise is rejected.

Note that promises are a way to handle asynchronous operations in JavaScript, and they allow us to write cleaner and more
 maintainable code.



 */