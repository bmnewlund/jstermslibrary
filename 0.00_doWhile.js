do
   statement
while (condition);

// A statement that is executed at least once and 
// is re-executed each time the condition evaluates to true.
//  To execute multiple statements within the loop, use a block statement ({ ... }) to group those statements.


// Example: 
var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
} while (i < 5);
document.getElementById('example').innerHTML = result;

// Result 1 2 3 4 5


