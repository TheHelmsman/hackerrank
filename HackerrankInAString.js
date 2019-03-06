'use strict';

const fs = require('fs');

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

// Complete the hackerrankInString function below.
function hackerrankInString(s) {
    const p = 'hackerrank'; // pattern
    let idx = 0;
    if (s.length < p.length) return 'NO';
    for (let i = 0; i < s.length; i++) {
        if (idx < p.length && s.charAt(i) == p.charAt(idx)) {
            idx++;
        }
    }
    return (idx == p.length) ? 'YES' : 'NO';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = hackerrankInString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
