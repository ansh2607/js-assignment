// EXAMPLES

// 1. log()
let a, b, c;
a = 'Hello World';
b = 26;
c = {
    name: 'john',
    age: 34,
    job: 'teacher'
};
console.log(a,b); // writes all the data into the console
console.log(c);

// 2. error()
console.error('This is an error message');

// 3. warn()
console.warn('This is a warning!!!')

// 4. clear()
console.clear() // clears the whole console and prints the message 'Console was cleared'

// 5. table()
console.table({'Name':'John', 'Age':26, 'job':'teacher'});
console.table([1,2,3,4]);

// 6. time() and timeEnd()
console.time('Time taken: ');
 let age = 15
 age >= 20 ? console.log('Legal Age') : console.log('Under age');
 
 function randFunc() {
     console.log('This is a random testing function!!')
 }
 randFunc();
console.timeEnd('Time taken: ');

// 7. count()
for(let i=0; i<=3; i++) {
    console.count(i);
}

// 8. group() and groupEnd()
console.group('Mobile Companies');
 console.log('Apple');
 console.log('Samsung');
 console.log('OnePlus');
 console.log(['Vivo', 'Gionee', 'Blackberry', 'Nokia']) 
console.groupEnd('Mobile Companies');

