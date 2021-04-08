/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 *    
 *    This function is different as it uses the Async/Await Syntatic sugar
 *    which means that it will not progress untill the first swait funciton 
 *    has completed and returnd a promise. It will return a promiss.
 * 
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 *     
 *    "Promise { <pending> }" is printed when it is treated like a regular
 *    funciton.
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 *    The code prints "HELLO THERE, DUCKY"
 * 
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
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
      }, 500);
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
        }, 500);
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



async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    spacerGreeting = await spacer(uppercasedGreeting)
    return spacerGreeting
}

/* Uncomment me! #1 */
result = greetAndUppercase('Ducky')
console.log(result)

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })