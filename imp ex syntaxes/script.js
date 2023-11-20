//named import export

// import { addAll, findMax, libraryName, options } from "./lib.js";



// const value= addAll([1,2,3]);
// const value2= findMax([1,4,3]);

// console.log(libraryName);
// console.log(options);
// console.log((value));
// console.log((value2));

//defoult import

// import min from "./lib.js";

// const max = min([22,33,55]);
// console.log(max)

// import all -------
import * as libObj from './lib.js'

console.log(libObj);
console.log(libObj.findMax([1,2,3,5]));
