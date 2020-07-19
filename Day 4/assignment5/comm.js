let sales = parseFloat(prompt('Enter your sales during the year:'));
let rew, comm;
if (sales > 20000) {
    rew = 0.1 * sales;
    comm = rew + sales;
    console.log(`Your sales ${sales}`);
    console.log(`Your 10% reward is: ${rew}`);
    console.log(`Total commission ${comm}`);
} else if(sales <= 20000 && sales > 10000) {
    rew = 0.07 * sales;
    comm = rew + sales;
    console.log(`Your sales ${sales}`);
    console.log(`Your 7% reward is: ${rew}`);
    console.log(`Total commission ${comm}`);
} else if (sales <= 10000 && sales > 5000) {
    rew = 0.05 * sales;
    comm = rew + sales;
    console.log(`Your sales ${sales}`);
    console.log(`Your 5% reward is: ${rew}`);
    console.log(`Total commission ${comm}`);
} else if (sales <= 5000) {
    rew = 0.02 * sales;
    comm = rew + sales;
    console.log(`Your sales: ${sales}`);
    console.log(`Your 2% reward is: ${rew}`);
    console.log(`Total commission ${comm}`);
} else {
    console.log('Please enter a valid sales figure!!!');
}