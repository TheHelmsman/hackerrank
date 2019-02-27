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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let chars = password.split('');
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";
    let checks = [false, false, false, false];
    for (let i = 0; i < password.length; i++) {
        if (numbers.indexOf(password[i]) != -1 && !checks[0]) checks[0] = true;
        if (lower_case.indexOf(password[i]) != -1 && !checks[1]) checks[1] = true;
        if (upper_case.indexOf(password[i]) != -1 && !checks[2]) checks[2] = true;
        if (special_characters.indexOf(password[i]) != -1 && !checks[3]) checks[3] = true;
    }
    let result = 0;
    for (let j = 0; j < checks.length; j++) {
        if (!checks[j]) result++;
    }
    if (password.length < 6) {
        if (6 - password.length > result) return (6 - password.length);
        if (6 - password.length < result) return result;
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
