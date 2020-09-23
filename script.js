/// Get buttons
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnClr = document.getElementById("btnClr");
const btnEql = document.getElementById("btnEql");
const btnSum = document.getElementById("btnSum");
const btnSub = document.getElementById("btnSub");
const btnMul = document.getElementById("btnMul");
const btnDiv = document.getElementById("btnDiv");
const display = document.getElementById("res");

// Gather buttons that are not C or = for display of content
const btnArr = [btn0, btn1, btnSum, btnSub, btnMul, btnDiv];
for (let btn of btnArr) {
    btn.onclick = () => {
        display.innerHTML += btn.innerHTML;
    }
}

// Clear elements at the press of C
btnClr.onclick = () => {
    display.innerHTML = null;
}

// Calculate content on screen
btnEql.onclick = () => {
    let calculation = display.innerHTML;
    const operator = calculation.match(/[^01]/)[0];
    console.log(operator);
    const numbers = calculation.split(operator).map(x => parseInt(x, 2));
    switch (operator) {
        case "+":
            display.innerHTML = (numbers[0] + numbers[1]).toString(2);
            break;
        case "-":
            display.innerHTML = (numbers[0] - numbers[1]).toString(2);
            break;
        case "*":
            display.innerHTML = (numbers[0] * numbers[1]).toString(2);
            break;
        case "/":
            display.innerHTML = (parseInt(numbers[0] / numbers[1])).toString(2);
            break;
    }
}