"use strict";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateLongNumberString(length = 306) {
    let str = '';
    for (let i = 0; i < length; i++) {
        str += getRandomInt(9);
    }
    return str;
}

function bigIntIsEven(bigInt) {
    const s = bigInt.toLocaleString('fullwide', {useGrouping:false});
    if(s.endsWith('0')||s.endsWith('2')||s.endsWith('4')||s.endsWith('6')||s.endsWith('8')) {
        return true;
    }
    return false;
}
// console.log(num1.toString());
// console.log(getRandomInt(Number.MAX_VALUE).toLocaleString());
// console.log(num1.toLocaleString('fullwide', {useGrouping:false}));
// console.log((num1 / num2).toLocaleString('fullwide', {useGrouping:false}));

function run() {
    const startingNumberString = generateLongNumberString();
    console.log(new Date());
    console.log('calculating:', startingNumberString);
    let currentBigInt = BigInt(startingNumberString);
    const bigInt1 = BigInt(1);
    const bigInt2 = BigInt(2);
    const bigInt3 = BigInt(3);

    while (currentBigInt !== bigInt1) {
        if (bigIntIsEven(currentBigInt)) {
            // process.stdout.write(currentBigInt.toLocaleString('fullwide', {useGrouping:false}) + ' . ');
            // console.log('even:', currentBigInt.toLocaleString('fullwide', {useGrouping:false}));
            currentBigInt = currentBigInt / bigInt2;
        } else {
            // process.stdout.write(currentBigInt.toLocaleString('fullwide', {useGrouping:false}) + ' | ');
            // console.log('un-even:', currentBigInt.toLocaleString('fullwide', {useGrouping:false}));
            currentBigInt = (currentBigInt * bigInt3) + bigInt1;
        }
    }
}

while (true) {
    run(); 
}
