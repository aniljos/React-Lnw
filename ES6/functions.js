

//function statement
//implicit args => this, arguments
function sum(x, y){
    console.log("in sum", arguments);

}
sum(2,3);
sum();
sum(2,3,4,5)

//function expression
const add = function addImpl(x, y){
    return x + y;
}
console.log("add", add(2,3));

// const calc = (x, y)=>{
//     return x + y;
// }
const calc = (x, y)=> x + y;
console.log("calc", calc(2,3));

const obj = {
    value: 10,
    print: function(){

        const _this = this;
        console.log("value", this);
        setTimeout(function(){
            console.log("value after 2 secs", _this.value);
        }, 2000);
        setTimeout(() => {
            console.log("value after 2 secs", this.value);
        }, 2000);
    }
}

obj.print();