import {add} from './one.js'

console.log("in two.js");

export function process(){
    console.log("in two.js process");
    add();
}

export default process;