function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();

// this is another snippet of code that goes over Lexical Scoping, Lexical Scoping is a term for how far reaching in
// scope a function or variable is. In this case each inner function has access to the functions and variables that are outside of themselves. 
// I am including a paragraph below that goes into more detail on how this works from Mozilla Devleoper: 
// init() creates a local variable called name and a function called displayName(). The displayName() function is an inner function that is defined inside init() 
// and is only available within the body of the  init() function. The displayName() function has no local variables of its own. However, 
// because inner functions have access to the variables of outer functions, displayName() can access the variable name declared in the parent function, init().