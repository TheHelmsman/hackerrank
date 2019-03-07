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

function insertionSort1(n, arr) {
    //  find lowest
    let lowest = arr[arr.length - 1];
    let cursor = arr.length - 1;
    let result = arr;
    while (cursor > -1) {
        let copied = false;
        for (let i = result.length - 1; i >= 0; i--) {
            if (result[i] == lowest) {
                result[i] = result[i - 1];
                cursor--;
                copied = true;
            } else {
                if (i == cursor && i == 0 > lowest && !copied) {
                    copied = true;
                    result[0] = lowest;
                    cursor = -1;
                }
                if (i == cursor && result[i - 1] > lowest && !copied) {
                    copied = true;
                    result[i] = result[i - 1];
                    cursor--;
                } else if (i == cursor && result[i - 1] < lowest && !copied) {
                    copied = true;
                    result[i] = lowest;
                    cursor = -1;
                }
            }
        }
        console.log(result.join(' '));
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
