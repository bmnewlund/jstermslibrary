let i = 4;

console.log(i);
(function(){
	var arraigh = [];

	arraigh.push(i, i + 1, i + 2 );
		console.log(arraigh[0]);
		console.log(arraigh[1]);
		console.log(arraigh[2]);
})()
console.log(i);

// The IIFE is a function that is immedately invoked and does not have to be named.
// It also is not hoistable in that it is contianed within the function that it is called in. 


