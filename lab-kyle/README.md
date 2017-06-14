# Kyle Aardal - Lab 02

## fp.js  

### functions
map: Takes an array like object, and a callback function as arguments. Returns an array of data that has been mutated by the callback function.

filter: Takes an array like object, and a callback function as arguments. Returns an array of data that has been filtered by the callback function.

reduce: Takes an array like object, and an array containing a callback function as it's first element, and a number as the second element. returns an array containing one element that is the result of all the data being acted upon by the callback function.

concat: takes in two array like objects and concatenates them into a single object.

splice: takes in two arrays. the first is an array like object, and the second is an array that contains the start, and end points. Can also contain elements to be spliced into the array. Returns a new array of the removed objects.

## index.js

### functions
cli: Takes the arguments from the terminal command and uses the fp.map to changes all letters to upper case. Prints upper cased arguments to the terminal.