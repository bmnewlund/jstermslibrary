// The for...in statement iterates over the enumerable properties of an object, in original insertion order. 
// For each distinct property, statements can be executed.

// Syntax: 
// for (variable in object) { ...
// }


Example: 
var obj = {a: 1, b: 2, c: 3};
    
for (var prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"