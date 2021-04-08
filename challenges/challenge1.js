/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *    
 *    The outputs will be printed in the order Step 1, Step 3, Step 2. I know 
 *    this because Step one will print with no delay then snooze will start
 *    and Step 3 will print. Step 2 will print last as it has a delay and will
 *    be added to the end of the queue of executing code.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *    
 *    The steps were printed in the order Step 1, Step 3, Step 2.
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *    The steps will be printed in the Order Step 1, Step 2, Step 3 because there
 *    is now no delay so it will take its correct place in the execution queue.
 * 
 *    I was incorrect I suspect it may have printed in the order of 1, 3, 2
 *    because even without a set delay it is still pushed to the end of the 
 *    queue.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

