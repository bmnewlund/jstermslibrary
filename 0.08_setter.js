// The set syntax binds an object property to a function to be called when there is an attempt to set that property.

// Defining a setter on new objects in object initializers
// This will define a pseudo-property current of object language that, when assigned a value, will update log with that value:

var language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}

language.current = 'EN';
console.log(language.log); // ['EN']

language.current = 'FA';
console.log(language.log); // ['EN', 'FA']


