// The for...of statement creates a loop iterating over iterable objects (including Array, Map, Set, String, TypedArray, arguments object and so on), 
// invoking a custom iteration hook with statements to be executed for the value of each distinct property.


let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31




