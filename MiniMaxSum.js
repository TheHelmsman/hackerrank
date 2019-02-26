'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

let currIdx = -1;
let minSum = Number.MAX_SAFE_INTEGER;
let maxSum = 0;

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    if (currIdx == arr.length-1) {
        console.log(minSum + " " + maxSum);
        return;
    } else {
        currIdx++;
    }
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i != currIdx) {
            sum += arr[i];
        }
    }
    if (sum > maxSum) maxSum = sum;
    if (sum < minSum) minSum = sum;
    miniMaxSum(arr);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
