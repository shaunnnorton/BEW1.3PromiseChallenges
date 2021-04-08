/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 *     
 *    What will be printed to the console is:
 *      "Hello there, Ducky"
 *      "MAKE SCHOOL IS AWSOME!!!"
 *     CORRECT
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 *    
 *    If greet fails it will return the error "Name must be a string" which will
 *    be printed when the promise is called. Uppercaser() will not run.
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 * 
 *    If greet succedes and upppercaser fails "Recieved an error!" and "Arguement
 *    to upper caser must be a string" will print after the result from greet()
 * 
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
 * 
 *******************************************************************************
 */

 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 1000);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 1500);
    });
}


const spacer = (str) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if (typeof str === 'string') {
      let new_string = ''
      for(let i=0 ; i< str.length * 2; i++){ //Spacing String
        if(i % 2 === 0){
          new_string += ' ' 
        }else{
          new_string += str[Math.floor(i/2)]
          //console.log(str[Math.floor(i/2)])
          //console.log(new_string)
        }
      }
      //console.log(new_string)
      resolve(new_string)
    }else{
      reject("Arguement must be string")
    }
    }, 2000)
  })
}

name = "Ducky"
my_str = "Makeschool is Awsome!!!"

greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(uppercaserResult)
    })
    .then((spacerResult)=>{
        console.log(spacerResult)
    })
    .catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
