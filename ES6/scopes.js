//var x=undefined

console.log("x", x);
var x = 10; //global
console.log("x", x);

var y;
console.log("y", y); //undefined

//console.log("z", z);


function foo(){
    //var message = undefined;

    console.log("in foo");
    if(x > 1){
        let message = "hello";
        console.log("message", message);
    }
   
}

foo();

var user = {
    id: 10,
    name: "Anil",

    print: function(){
        console.log("Id", this.id);
        console.log("Name", this.name);
        console.log(`the user id is ${this.id} and the name is ${this.name}`);
    }
}
console.log(user);

user.print();

