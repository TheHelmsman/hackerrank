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

// Complete the caesarCipher function below.
function caesarCipher(s, k) {
    let upper = 'abcdefghijklmnopqrstuvwxyz';
    let lower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encrypted = [];
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i);
        let char = s.charAt(i);
        if (code < 65 || (code > 90 && code < 97) || code > 122) {
            //  special char
            encrypted.push(char);
        } else {
            for (let j = 0; j < upper.length; j++) {
                if (upper[j] == char) encrypted.push(upper[(j + k) % upper.length]);
                if (lower[j] == char) encrypted.push(lower[(j + k) % lower.length]);
            }
        }
    }
    return encrypted.join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const k = parseInt(readLine(), 10);

    let result = caesarCipher(s, k);

    ws.write(result + "\n");

    ws.end();
}
