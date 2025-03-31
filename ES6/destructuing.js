
const numbers = [2, 7, 8];

// const e0 = numbers[0];
// const e1 = numbers[1];
// const e2 = numbers[2];

const [e0, e1, e2] = numbers;

console.log(e0);
console.log(e1);
console.log(e2);

const obj = {id: 1, email: "abc"};

const {id, email} = obj;
console.log(id);
console.log(email);