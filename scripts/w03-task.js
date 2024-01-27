/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = "";
multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumbers () {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotalDue () {
    let subtotal = Number(document.querySelector('#subtotal').value);
    var membership = document.getElementById('member');
    let total = 0;
    if (membership.checked) {
        total = subtotal * 0.8;
    } else {
        total = subtotal
    }
    document.getElementById('total').innerHTML = "$" + total.toFixed(2);
}

document.querySelector('#getTotal').addEventListener('click', getTotalDue);

/* ARRAY METHODS - Functional Programming */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
const oddArray = numbersArray.filter(odds);

function odds (value) {
    if (value % 2 == 1) {
        return value;
    }
}
document.querySelector('#odds').innerHTML = oddArray;
/* Output Evens Only Array */
const evenArray = numbersArray.filter(evens);

function evens (value) {
    if (value % 2 == 0) {
        return value;
    }
}
document.querySelector('#evens').innerHTML = evenArray;
/* Output Sum of Org. Array */
const arraySum = numbersArray.reduce((sum, number) => sum + number);

document.querySelector('#sumOfArray').innerHTML = arraySum;
/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);

document.querySelector('#multiplied').innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultipliedArray = multipliedArray.reduce((sum, number) => sum + number);

document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultipliedArray;