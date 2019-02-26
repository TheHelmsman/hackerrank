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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    let result = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 38) {   // leave unmodified
            result.push(grades[i]);
        } else {
            let splitted = grades[i].toString().split('');
            if (splitted[1] <= 5) {
                splitted[1] = 5;
            } else {
                splitted[0]++;
                splitted[1] = 0;
            }
            if (parseInt(splitted.join('')) - grades[i] < 3) {
                result.push(parseInt(splitted.join('')));
            } else {
                result.push(parseInt(grades[i]));
            }
        }
    }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grades = [];

    for (let gradesItr = 0; gradesItr < n; gradesItr++) {
        const gradesItem = parseInt(readLine(), 10);
        grades.push(gradesItem);
    }

    let result = gradingStudents(grades);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
