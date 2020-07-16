// EXAMPLES

//Array methods:
// 1. toString()
let arr = ['john', 26, 'teacher'];
console.log(arr.toString());

// 2. pop() and push()
arr.push('married','hello'); // adds items to the last
console.log(arr); 
arr.pop(); // removes last item
console.log(arr);

// 3. shift() and unshift()
arr.unshift('hello'); // adds item to the start
console.log(arr);
arr.shift(); // removes the first item
console.log(arr);

// 4. splice()
arr.splice(1, 0, 'smith'); // adds item to the specified location
console.log(arr);

// 5. concat()
let arr2 = ['jane', 'smith', 19, 'graphic designer', 'married'];
arr3 = arr.concat(arr2)
console.log(arr3);

// 6. slice()
arr4 = arr2.slice(0,3);
console.log(arr4);

// 7. forEach()
arr.forEach(function(el) {
    console.log(el);    
})

// 8. map()
let num = [121, 256, 16, 36, 81];
let sqrt = num.map(Math.sqrt);
console.log(sqrt);

// 9. sort()
sortedArr = arr.sort();
console.log(sortedArr);

// 10. reverse()
console.log(arr.reverse());


//String methods:
// 1. indexOf() and lastIndexOf()
let str = 'Hello this is random PROGRAM showing examples of string methods '
console.log(str.indexOf('s')); //9
console.log(str.lastIndexOf('s')); //62

// 2. endsWith()
console.log(str.endsWith('methods '));

// 3. includes()
console.log(str.includes('program'));

// 4. match()
let rem = str.match('ring');
console.log(rem);

// 5. repeat()
console.log(str.repeat(3));

// 6. replace()
let newStr = str.replace('random','anonymous');
console.log(newStr);

// 7. search()
console.log(str.search('random')); //14

// 8. startsWith()
console.log(str.startsWith('Hello'));

// 9. slice()
console.log(str.slice(0, 28));

// 10. split()
console.log(str.split(' '));

// 11. substring()
console.log(str.substring(0, 28));

// 12. toLowerCase()
console.log(str.toLowerCase());

// 13. toUpperCase()
console.log(str.toUpperCase());

// 14. trim()
str2 = '     hello!!! ';
console.log(str2);
console.log(str2.trim());

// 15.concat()
str3 = str2.concat(str);
console.log(str3);