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

// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {

    let tmp;
    for (let i = 1; i < n; i++) {
        tmp = arr.splice(i, 1)[0];

        for (let j = i; j >= 0; j--) {
            if (tmp > arr[j - 1] || j === 0) {
                arr.splice(j, 0, tmp);
                break;
            }
        }

        console.log(arr.join(' '));
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort2(n, arr);
}
