// An arrow function expression has a shorter syntax than a function expression and does not bind its own this, arguments, super, or new.target. 
// These function expressions are best suited for non-method functions, and they cannot be used as constructors.

(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// equivalent to: (param1, param2, …, paramN) => { return expression; }

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

// A function with no parameters should be written with a pair of parentheses.
() => { statements }