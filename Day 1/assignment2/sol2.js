// EXAMPLES

var a, b = 'Hyy!!!';
let c, d;
const e = 500; // can not initialize it elsewhere

// initializing after declaring the variables
a = 100;
b = 'Hello!!'; //updates the value of variable b
c = [20,30,40,50];
d = {
    name:'john',
    age: 26,
    job: 'teacher'
};
// e = 260; // Will throw an error (Cannot update the value of a const) 
console.log(a + ' , ' + b);
console.log(c);
console.log(d);

/*
var i = 2000;
for (var i = 0; i <= 3; i++) {
    console.log(i)
}
console.log(i) // output = 4
*/

let i = 2000;
for (let i = 0; i <= 3; i++) {
    console.log(i)
}
console.log(i) // output = 2000
