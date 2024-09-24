"use strict";
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    ;
}
console.log(add(4, 5));
let numResult = [];
let stringResult = [];
const num1element = document.getElementById('num1');
const num2element = document.getElementById('num2');
const buttonelement = document.querySelector('button');
function printResult(resultObj) {
    console.log(resultObj.val, resultObj.timeStamp);
}
buttonelement.addEventListener('click', () => {
    const num1 = num1element.value;
    const num2 = num2element.value;
    const result = add(+num1, +num2);
    console.log(result);
    printResult({ val: result, timeStamp: new Date() });
    numResult.push(result);
    console.log(numResult);
    const strresult = add(num1, num2);
    console.log(strresult);
    stringResult.push(strresult);
    console.log(stringResult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
myPromise.then(res => {
    console.log(res.split('w'));
});
