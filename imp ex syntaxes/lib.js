//named import export

// const name = "My array Library";

// const options={
//     versions: 1.1,
//     author : "code malayalam"
// }

// function addAll(arr=[]) {
//     log( "addAll");
//     return arr.reduce((total, item)=> total+item, 0)
// }

// import function findMax(arr=[]) {
//     log("findMax");
//     return Math.max(...arr);
// }

// function log(val) {
//     console.log("inside", val)
// }

// export{
//     name as libraryName,
//     options,
//     addAll,
//     
// }

//default import export

import { test1 } from "./lib2.js";

const name = "My array Library";

const options={
    versions: 1.1,
    author : "code malayalam"
}

 function addAll(arr=[]) {
    log( "addAll");
    return arr.reduce((total, item)=> total+item, 0)
}

export function findMax(arr=[]) {
    log("findMax");
    return Math.max(...arr);
}

function log(val) {
    console.log("inside", val)
}

export default findMax

//exporting the expoerted itemss
export {test1} from './lib2.js'
