function calc() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let op = document.getElementById('operations').value;

    if (op === '+') {
        document.getElementById('result').value = num1 + num2;
    }
    if (op === '-') {
        document.getElementById('result').value = num1 - num2;
    }
    if (op === 'x') {
        document.getElementById('result').value = num1 * num2;
    }
    if (op === '/') {
        document.getElementById('result').value = num1 / num2;
    }
    if (op === '%') {
        document.getElementById('result').value = (num1 / 100) * num2;
    }
    if (op === 'sqrt') {
        document.getElementById('result').value = Math.sqrt(num1);
    }

}