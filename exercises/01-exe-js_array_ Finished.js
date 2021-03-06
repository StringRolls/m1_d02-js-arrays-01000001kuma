// Practice JS Arrays

//Given the array
const favorites = ['javascript', 'html', 'css'];
// iterate over it and console.log each element

favorites.forEach(element => console.log(element));

// ... your code here

// remove first element

const firstElement = favorites.shift();

// ... your code here

console.log(favorites); // => [ 'html', 'css' ]

// remove last element
favorites.pop();
// ... your code here
console.log(favorites); // => [ 'html' ]

// add 'react' on the first place
favorites.unshift("react");
// ... your code here
console.log(favorites); // => [ 'react', 'html' ]

// add 'node' to the last place
favorites.push("node");
// ... your code here
console.log(favorites); // => [ 'react', 'html', 'node' ]

// remove element in the position 2 and add 'express'
favorites.splice(1,1, "express");
// ... your code here
console.log(favorites); // => [ 'react', 'express', 'node' ]

// remove elements in the positions 2 and 3 and add 'mongodb'
favorites.splice(1,2,"mongodb")
// ... your code here
console.log(favorites); // => [ 'react', 'mongodb' ]