import processFromTwo from './two.js'  // default import
//import {process as processFromTwo} from './two.js' //named import

console.log("in main.js");




function process(){
    console.log("in main.js process");
}

process();
processFromTwo();