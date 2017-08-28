// Return values and the Return function: This ability to return a value with the return function allows for the resulting value to be used later in the function.
// Here is an extremely helpfull section of explanation for the return values rendered: Generally, 
// a return value is used where the function is an intermediate step in a calculation of some kind. 
// You want to get to a final result, which involves some values. Those values need to be calculated by a function, 
// which then returns the results so they can be used in the next stage of the calculation.



// Here is a snippet of code showing how to use a return: 
function random(number) {
  return Math.floor(Math.random()*number);
}